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
  onEnterC1 = c1 => this.setState({ isRedirecting2: true, activeCourse1: c1 })
  onEnterC2 = c2 => this.setState({ isRedirecting1: true, activeCourse2: c2 })

  winnerCreator = (coursePerspective, compareCourse) => {
    const winArray = isCourse(compareCourse) ? 
    graphHeaders.map(items => (
      parseInt(courseData(coursePerspective).history[courseData(coursePerspective).history.length - 1][items], 10)
      > parseInt(courseData(compareCourse).history[courseData(compareCourse).history.length - 1][items], 10)
    ))
    : false
    winArray && winArray.push(aggregatedData(coursePerspective) > aggregatedData(compareCourse))
    return winArray
  }
  compareCourse = coursePerspective => coursePerspective === this.props.course1 ? this.props.course2 : this.props.course1
  winnerObject = coursePerspective => ({
      winnerArray: this.winnerCreator(coursePerspective, this.compareCourse(coursePerspective)),
      aggregatedData: aggregatedData(coursePerspective),
  })

  render() {
    const {
      course1,
      course2,
      location
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
                winner={isCourse(course1) && this.winnerObject(course1)}
                graphHeaders={graphHeaders}
                onEnter={this.onEnterC1}
                search={location.search}
              />
              <SetUpTable
                course={course2}
                winner={isCourse(course2) && this.winnerObject(course2)}
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
