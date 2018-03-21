import React, { Component } from 'react'
import axios from 'axios'

import { rail } from '../../../../config/config.json'

import DepartureBoard from '../../ui/rail/DepartureBoard'

const { darwinApiProxy, darwinToken, refreshInterval } = rail

class ContainerDepartureBoard extends Component {
  constructor(props) {
    super(props)
    const { station, callingPoint, options } = props

    this.state = {
      departures: [],
      loading: false,
      station,
      callingPoint,
      options
    }

    this.loadDate = this.loadData.bind(this)
  }

  componentDidMount() {
    this.loadData()

    const timer = setInterval(() => this.loadData(), refreshInterval || 120000)
    this.setState({ timer })
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  componentWillReceiveProps(newProps) {
    const { station, callingPoint } = newProps

    this.setState({
      station,
      callingPoint
    }, () => this.loadData())
  }

  loadData() {
    const { station, callingPoint, options } = this.state

    if (station) {
      this.setState({ loading: true })

      axios.post(`${darwinApiProxy}/getDepartureBoardWithDetails/${station.code}`, {
        token: darwinToken,
        options: {
          destination: callingPoint ? callingPoint.code : null,
          ...options
        }
      })
        .then(response => this.setState({
          departures: response.data.trainServices,
          loading: false
        }))
        .catch(() => {
          this.setState({
            loading: false
          })
        })
    }
  }

  render() {
    const { departures, station, callingPoint } = this.state

    return (
      <DepartureBoard
        station={station}
        callingPoint={callingPoint}
        departures={departures}
      />
    )
  }
}

export default ContainerDepartureBoard
