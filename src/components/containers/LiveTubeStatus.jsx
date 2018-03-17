import axios from 'axios'
import React, { Component } from 'react'

import LiveTubeStatus from '../ui/LiveTubeStatus'

class ContainerLTS extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      error: false,
      tubeData: []
    }
  }

  loadData() {
    this.setState({ loading: true })

    axios.get('https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status', {
      params: {
        app_id: process.env.TFL_APP_ID,
        app_key: process.env.TFL_API_KEY
      }
    })
      .then((response) => {
        this.setState({
          tubeData: response.data,
          loading: false
        })
      })
      .catch(() => this.setState({
        loading: false,
        error: true,
        tubeData: []
      }))
  }

  componentDidMount() {
    this.loadData()
    const reloadInterval = setInterval(() => this.loadData(), 60000)
    this.setState({ reloadInterval })
  }

  componentWillUnmount() {
    clearInterval(this.state.reloadInterval)
  }

  render() {
    return (
      <LiveTubeStatus
        data={this.state.tubeData}
        error={this.state.error}
        loading={this.state.loading}
      />
    )
  }
}

export default ContainerLTS
