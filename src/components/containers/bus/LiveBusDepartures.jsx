import axios from 'axios'
import React, { Component } from 'react'

import { bus } from '../../../../config/config.json'

import LiveBusDepartures from '../../ui/bus/LiveBusDepartures'

const { countdownApiProxy, refreshInterval } = bus

class ContainerLBD extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      error: false,
      busData: null
    }
  }

  loadData() {
    this.setState({ loading: true })

    const { stopCode } = this.props

    const component = this
    axios.post(`${countdownApiProxy}/${stopCode}`, {
      options: {
        ReturnList: 'EstimatedTime,LineID,DestinationName,StopPointName,TripID'
      }
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
          loading: false
        })
      })
      .catch(() => {
        this.setState({ error: true, loading: false })
      })
  }

  componentDidMount() {
    this.loadData()
    const reloadInterval = setInterval(() => this.loadData(), refreshInterval || 30000)
    this.setState({ reloadInterval })
  }

  componentWillUmount() {
    clearInterval(this.state.reloadInterval)
  }

  render() {
    return (
      this.state.busData
        ? <LiveBusDepartures
          data={this.state.busData}
          error={this.state.error}
          loading={this.state.loading}
        />
        : null
    )
  }
}

export default ContainerLBD
