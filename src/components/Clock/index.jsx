import React, { Component } from 'react'
import ClockView from './component'

class Clock extends Component {
  constructor() {
    super()

    this.state = {
      time: Date.now(),
      unsetTimer: null,
    }
  }

  componentDidMount() {
    this.initialiseClock()
  }

  componentWillUnmount() {
    this.state.unsetTimer()
  }

  initialiseClock() {
    const unsetTimer = setInterval(() => this.setState({ time: Date.now() }), 1000)
    this.setState({ unsetTimer })
  }

  render() {
    return (
      <ClockView time={this.state.time} />
    )
  }
}

export default Clock
