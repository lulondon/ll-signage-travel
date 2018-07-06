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
      tubeData: [],
    }
  }

  componentDidMount() {
    this.loadData()
    this.initialiseRefreshInterval()
  }

  componentWillUnmount() {
    clearInterval(this.state.reloadInterval)
  }

  initialiseRefreshInterval() {
    const reloadInterval = setInterval(() => this.loadData(), refreshInterval || 60000)
    this.setState({ reloadInterval })
  }

  loadData() {
    this.setState({ loading: true })

    axios.get('https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status', {
      params: {
        app_id: tflAppId,
        app_key: tflApiKey,
      },
    })
      .then((response) => {
        this.setState({
          tubeData: response.data,
          loading: false,
          error: null,
        })
      })
      .catch(() => this.setState({
        loading: false,
        error: 'Connection error', // fix this
        tubeData: [],
      }))
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
