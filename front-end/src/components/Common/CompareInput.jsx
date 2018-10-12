import React from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
`
const FineInput = styled.input`
 width: 300px; 
 height: 3em;
 :focus {
    outline:none;
  }
  align-self: center;
  `
const Header = styled.div`
 font-size: 2em;
 font-weight: bold;
 padding-bottom: 50px;
 padding-left: 20px;
 margin-top:40px;
 align-self: center;
 `
const Error = styled.span`
 color:red;
 margin-left: 100px;
 `

class CompareInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isRedirecting: false,
      inputValue: '',
      showError: false,
      courseSugg: '',
      firstCourse: '',
      secondCourse: '',
    }
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value })
    if (this.state.showError) {
      this.setState({ showError: false })
    }
    this.setState({courseSugg: this.props.courseSuggestion(event.target.value)})
    this.props.isCourse(event.target.value) ? 
      this.props.tag === 1 ? 
        this.setState({firstCourse: event.target.value})
      : this.setState({secondCourse: event.target.value}) : 
      this.props.tag === 1 ? 
      this.props.isCourse(this.props.courseSuggestion(event.target.value)) && 
      this.setState({firstCourse: this.props.courseSuggestion(event.target.value)})
      :
      this.props.isCourse(this.props.courseSuggestion(event.target.value)) && 
      this.setState({secondCourse: this.props.courseSuggestion(event.target.value)})
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.setState({ showError: !this.props.isCourse(this.state.inputValue)})
      this.setState({ isRedirecting: this.props.isCourse(this.state.inputValue) || this.props.isCourse(this.state.courseSugg) })
    }
  }

  componentDidMount() {
    const { course, tag } = this.props;
    if(course){
      if(course.length > 0){
        tag === 1 ? this.setState({secondCourse: course }) :
        this.setState({firstCourse: course })
      }
    }
  }
  
  render() {
    const {
      isRedirecting, inputValue, showError, courseSugg, firstCourse, secondCourse,
    } = this.state
    return (
      <Wrapper>
        {isRedirecting && <Redirect to={`/compare/${firstCourse}:${secondCourse}`} />}
        <Header>Compare with another course</Header>
        <FineInput
          placeholder="Enter course code"
          value={inputValue}
          onChange={event => this.handleChange(event)}
          onKeyPress={event => this.handleKeyPress(event)}
        />
        {courseSugg.length > 0 && (
          <span>Do you mean {courseSugg}?</span>
        )
        }
        {showError
        && (
        <Error>
          {inputValue.toUpperCase()}
          {' '}
          {' '}
is not a valid course code
        </Error>
        )
        }
      </Wrapper>
    )
  }
}


export default CompareInput
