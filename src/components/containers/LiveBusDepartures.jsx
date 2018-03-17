import axios from 'axios'
import React, { Component } from 'react'

import LiveBusDepartures from '../ui/LiveBusDepartures'

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

    const component = this
    axios.get('http://countdown.api.tfl.gov.uk/interfaces/ura/instant_V1', {
      params: {
        StopCode1: this.props.stopCode,
        ReturnList: 'EstimatedTime,LineID,DestinationName,StopPointName,TripID'
      }
    })
      .then((response) => {
        const busData = JSON.parse(`[${response.data.replace(/]/g, '],').replace(/\],$/, ']').toString()}]`).slice(1)
        busData.sort((a, b) => {
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
    const reloadInterval = setInterval(() => this.loadData(), 30000)
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
