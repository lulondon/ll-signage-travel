import axios from 'axios'
import React, { Component } from 'react'

import { bus } from '../../../config/config.json'

import BusDeparturesView from './component'

const { countdownApiProxy, refreshInterval } = bus

class BusDepartures extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      error: null,
      busData: null,
    }
  }

  componentDidMount() {
    this.loadData()
    this.initialiseRefreshInterval()
  }

  componentWillUmount() {
    clearInterval(this.state.reloadInterval)
  }

  initialiseRefreshInterval() {
    const reloadInterval = setInterval(() => this.loadData(), refreshInterval || 30000)
    this.setState({ reloadInterval })
  }

  loadData() {
    this.setState({ loading: true })

    const { stopCode } = this.props

    const component = this
    axios.post(`${countdownApiProxy}/${stopCode}`, {
      options: {
        ReturnList: 'EstimatedTime,LineID,DestinationName,StopPointName,TripID',
      },
    })
      .then((response) => {
        const busData = response.data
          .slice(1)
          .sort((a, b) => {
            const x = a[5]
            const y = b[5]
            return ((x < y) ? -1 : ((x > y) ? 1 : 0)) // eslint-disable-line no-nested-ternary
          })

        component.setState({
          busData,
          loading: false,
          error: null,
        })
      })
      .catch(() => this.setState({
        error: 'Connection error',
        loading: false,
      }))
  }

  render() {
    return (
      this.state.busData
        ? <BusDeparturesView
          data={this.state.busData}
          error={this.state.error}
          loading={this.state.loading}
        />
        : null
    )
  }
}

export default BusDepartures
