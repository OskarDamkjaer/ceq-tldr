import React from 'react'
import styled from 'styled-components'
import {
  courseSuggestion, isCourse,
} from '../../data'

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
 align-self: center;
 `
const Suggestion = styled.span`
  align-self: center;
 `
class CompareInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      showError: false,
    }
  }
  handleChange = (event) => this.setState({ inputValue: event.target.value, showError: false })

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      isCourse(this.state.inputValue) ? 
      this.props.onEnter(this.state.inputValue) : 
      isCourse(courseSuggestion(this.state.inputValue)) ? 
      this.props.onEnter(courseSuggestion(this.state.inputValue)):
      this.setState({showError: true})
    }
  }

  render() {
    const { inputValue, showError } = this.state
    const suggestion = courseSuggestion(inputValue)
    return (
      <Wrapper>
        <Header>Compare with another course</Header>
        <FineInput
          placeholder="Enter course code"
          value={inputValue}
          onChange={event => this.handleChange(event)}
          onKeyPress={event => this.handleKeyPress(event)}
        />
        {suggestion.length > 0 && 
          <Suggestion>Do you mean {suggestion}?</Suggestion>
        }
        {showError && 
        <Error>
          {inputValue.toUpperCase()} is not a valid course code
        </Error>
        }
      </Wrapper>
    )
  }
}


export default CompareInput
