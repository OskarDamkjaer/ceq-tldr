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
 `

class CompareInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isRedirecting: false,
      inputValue: '',
    }
  }

  render() {
    const { course } = this.props
    const { isRedirecting, inputValue } = this.state
    return (
      <Wrapper>
        {isRedirecting && <Redirect to={`/compare/${course}:${inputValue}`} />}
        <Header>Compare this course with another course</Header>
        <FineInput
          placeholder="Enter course code"
          onChange={event => this.setState({ inputValue: event.target.value })}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              this.setState({ isRedirecting: true })
            }
          }}
        />
      </Wrapper>
    )
  }
}


export default CompareInput
