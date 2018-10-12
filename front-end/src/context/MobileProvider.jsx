import React from 'react'
import MobileContext from './isMobile'

class MobileProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: false,
    }
  }

  componentDidMount() {
    this.setState({
      isMobile: window.innerWidth < 700,
    })
    window.addEventListener('resize', () => {
      this.setState({
        isMobile: window.innerWidth < 700,
      })
    }, false)
  }

  render() {
    const {
      isMobile,
    } = this.state
    const {
      children,
    } = this.props

    return (
      <MobileContext.Provider value={isMobile}>
        {children}
      </MobileContext.Provider>
    )
  }
}


export default MobileProvider
