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

    }
  }

  render() {
    const { course, isCourse } = this.props
    const { isRedirecting, inputValue, showError } = this.state
    return (
      <Wrapper>
        {isRedirecting && <Redirect to={`/compare/${course}:${inputValue}`} />}
        <Header>Compare with another course</Header>
        <FineInput
          placeholder="Enter course code"
          onChange={(event) => {
            this.setState({ inputValue: event.target.value })
            { showError && this.setState({ showError: false }) }
          }
          }
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              this.setState({ showError: !isCourse(inputValue) })
              this.setState({ isRedirecting: isCourse(inputValue) })
            }
          }}
        />
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
