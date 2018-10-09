import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  margin-top: 40px;
  font-size: 3em;
`
const Gray = styled.div`
  color:gray;
`
class NoMatchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isRedirecting: false,
    }
  }

  render() {
    const { isRedirecting } = this.state
    const { location } = this.props

    return (
      <Wrapper>
        {isRedirecting && <Redirect to={{ pathname: '/' }} push />}
        Sorry we can't find the page
        {' '}
        <br />
        <Gray>{`ceqtldr.${location.pathname.substring(1)}.10av10.com`}</Gray>
        <input type="button" onClick={() => this.setState({ isRedirecting: true })} value="Back to home screen" />
      </Wrapper>
    )
  }
}

export default NoMatchPage
