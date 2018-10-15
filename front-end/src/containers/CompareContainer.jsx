import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import {
  courseData, graphHeaders, isCourse,
} from '../data'
import Header from '../components/Common/PageHeader'
import MobileContext from '../context/isMobile'
import SetUpTable from '../components/Compare/SetUpTable'


const Wrapper = styled.div`
   display: grid;
   grid-template-columns: ${props => !props.isMobile && '50% 50%'};
 `
 
const aggregatedData = course => (
  Object.keys(courseData(course).history[courseData(course).history.length - 1])
    .filter(item => graphHeaders.includes(item))
    .map(item => parseInt(courseData(course).history[courseData(course).history.length - 1][item], 10))
    .reduce((acc, curr) => acc + curr, 0)
)
const winnerArray = (courseCurrent, courseComparing) => (
  graphHeaders.map(items => (
    parseInt(courseData(courseCurrent).history[courseData(courseCurrent).history.length - 1][items], 10)
    > parseInt(courseData(courseComparing).history[courseData(courseComparing).history.length - 1][items], 10)
  ))
)
class CompareContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isRedirecting1: false,
      isRedirecting2: false,
      activeCourse1: '',
      activeCourse2: '',
    }
  }
  onEnterC1 = c1 => this.setState({isRedirecting2:true, activeCourse1: c1})
  onEnterC2 = c2 => this.setState({isRedirecting1:true, activeCourse2: c2})
  render() {
    const {
      course1,
      course2,
    } = this.props
    const {
      isRedirecting1,
      isRedirecting2,
      activeCourse1,
      activeCourse2
    } = this.state
    return (
      <div>
        {isRedirecting1 && <Redirect to={`/compare/${course1}:${activeCourse2}`} />}
        {isRedirecting2 && <Redirect to={`/compare/${activeCourse1}:${course2}`} />}
        <Header />
        <MobileContext.Consumer>
          {isMobile => (
            <Wrapper isMobile={isMobile}>
              <SetUpTable
                course={course1}
                isWinner={isCourse(course1) && isCourse(course2) && aggregatedData(course1)
              > aggregatedData(course2)}
                winnerArray={isCourse(course1) && isCourse(course2) && winnerArray(course1, course2)}
                aggregatedScore={isCourse(course1) && String(aggregatedData(course1))}
                graphHeaders={graphHeaders}
                onEnter={this.onEnterC1}
              />
              <SetUpTable
                course={course2}
                isWinner={isCourse(course1) && isCourse(course2) && aggregatedData(course2)
              > aggregatedData(course1)}
                winnerArray={isCourse(course1) && isCourse(course2) && winnerArray(course2, course1)}
                aggregatedScore={isCourse(course2) && String(aggregatedData(course2))}
                graphHeaders={graphHeaders}
                onEnter={this.onEnterC2}
              />
            </Wrapper>
          )}
        </MobileContext.Consumer>
      </div>
    )
  }
}

export default CompareContainer
