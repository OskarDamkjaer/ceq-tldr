import React from 'react'
import { Redirect } from 'react-router-dom'
import CourseGraph from '../components/Course/CourseGraph'
import CourseGraphRegistered from '../components/Course/CourseGraphRegistered'

class GraphContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'all',
      isRedirecting: false,
      toCourse: '',
    }
  }

  handleHover = name => this.setState({ active: name })
  handleOut = () => this.setState({active: 'all'})
  onEnter = course => this.setState({isRedirecting:true, toCourse: course})

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const {
      orderedHeadersFiltered,
      orderedHeadersStyledFiltered,
      courseCode,
      colorArray,
      courseData,
      isCourse,
      courseSuggestion,
    } = this.props
    const {
      isRedirecting,
      toCourse
    } = this.state
    return (
      <div>
        {isRedirecting && <Redirect to={`/compare/${courseData.history[0].code}:${toCourse}`} />}
        <CourseGraph
          graphHeaders={orderedHeadersFiltered}
          graphHeadersStyled={orderedHeadersStyledFiltered}
          history={courseData.history}
          name={courseData.name}
          colorArray={colorArray}
          courseCode={courseCode}
          xAxis={courseData.xAxis}
          isNeg={courseData.isNeg}
          isActive={this.state.active}
          handleHover={this.handleHover}
          handleOut={this.handleOut}
          isCourse={isCourse}
          courseSuggestion={courseSuggestion}
          onEnter={this.onEnter}
        />
        <CourseGraphRegistered
          history={courseData.history}
          colorArray={colorArray}
          xAxis={courseData.xAxis.concat().reverse()}
          isLess={courseData.isLess}
        />
      </div>
    )
  }
}

export default GraphContainer
