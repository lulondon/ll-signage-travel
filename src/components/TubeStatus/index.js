import axios from 'axios'
import React, { Component } from 'react'

import { tube } from '../../../config/config.json'

import TubeStatusView from './component'

const { tflAppId, tflApiKey, refreshInterval } = tube

class TubeStatus extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      error: null,
      tubeData: []
    }
  }

  loadData() {
    this.setState({ loading: true })

    axios.get('https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status', {
      params: {
        app_id: tflAppId,
        app_key: tflApiKey
      }
    })
      .then((response) => {
        this.setState({
          tubeData: response.data,
          loading: false,
          error: null
        })
      })
      .catch(() => this.setState({
        loading: false,
        error: 'Connection error', // fix this
        tubeData: []
      }))
  }

  componentDidMount() {
    this.loadData()
    const reloadInterval = setInterval(() => this.loadData(), refreshInterval || 60000)
    this.setState({ reloadInterval })
  }

  componentWillUnmount() {
    clearInterval(this.state.reloadInterval)
  }

  render() {
    const { tubeData, error, loading } = this.state

    return (
      <TubeStatusView
        data={tubeData}
        error={error}
        loading={loading}
      />
    )
  }
}

export default TubeStatus
