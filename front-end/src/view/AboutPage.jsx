import React from 'react'
import styled from 'styled-components'
import PageHeader from '../components/Common/PageHeader'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`
const LeftWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`
const RightWrapper = styled.div`
  display:flex;
  flex-direction: column;
`
const HeaderStyle = styled.div`
  display:flex;
  justify-content: center;
  font-size:4em;
  margin-bottom: 100px;
  margin-top: 100px;
`
const TextStyle = styled.div`
  font-size:1.5em;
  padding: 20px;
  margin-left: 50px;
`
const AboutPage = () => (
  <div>
    <PageHeader />
    <HeaderStyle>About this page</HeaderStyle>
    <Wrapper>
      <LeftWrapper>
        <TextStyle>
This page was created with technologies like
React, React Router, React Redux, React Context etcetera.
          The source code is published in open repo on
          {' '}
          <b>
            <a href="https://github.com/OskarDamkjaer/ceq-tldr/tree/master/front-end" alt="github">Github</a>
          </b>
.
          {' '}

          Data is received from public CEQ reports from Lund University faculty of engeneering. Code for fetching data is written in Python and the source code is published in open repo on
          {' '}
          <b>
            <a href="https://github.com/OskarDamkjaer/ceq-tldr/tree/master/data-utils" alt="github">Github</a>
          </b>
        </TextStyle>
      </LeftWrapper>
      <RightWrapper>
        <TextStyle>
          <b>Front-end:&nbsp;</b>
          {' '}
          Catarina Sörensen
          &nbsp;
          <b>Data fetching:&nbsp;</b>
          {' '}
          Oskar Damkjaer
        </TextStyle>
        <TextStyle>
        Please send us bug report, feedback and suggestion for this site to this email address:
          <b>&nbsp; ceqtldr@10av10.com</b>
        </TextStyle>
      </RightWrapper>
    </Wrapper>
  </div>

)

export default AboutPage
