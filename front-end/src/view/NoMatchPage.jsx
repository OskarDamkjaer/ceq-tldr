import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import PageHeader from '../components/Common/PageHeader'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  margin-top: 40px;
  font-size: 4em;
`
const Gray = styled.div`
  color:gray;
`
const Button = styled.input`
  height: 50px;
  width: 200px;
  background-color: gray;
  color: white;
  font-size: 20px;
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
      <div>
        <PageHeader />
        <Wrapper>
          {isRedirecting && <Redirect to={{ pathname: '/' }} push />}
          <br />
        Sorry we can't find the page
          {' '}
          <br />
          <br />
          <Gray>{`ceqtldr.10av10.com/${location.pathname.substring(1)}`}</Gray>
          <br />
          <br />
          <Button type="button" onClick={() => this.setState({ isRedirecting: true })} value="BACK TO HOME" />
        </Wrapper>
      </div>

    )
  }
}

export default NoMatchPage
