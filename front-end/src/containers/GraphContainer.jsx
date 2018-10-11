import React from 'react'
import CourseGraph from '../components/Course/CourseGraph'
import CourseGraphRegistered from '../components/Course/CourseGraphRegistered'

class GraphContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'all',
    }
  }

  handleHover = name => this.setState({ active: name })
  handleOut = () => this.setState({active: 'all'})

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
    return (
      <div>
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
