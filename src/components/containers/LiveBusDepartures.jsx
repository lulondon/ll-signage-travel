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

    let component = this
    axios.get('http://countdown.api.tfl.gov.uk/interfaces/ura/instant_V1', {
      params: {
        StopCode1: this.props.stopCode,
        ReturnList: 'EstimatedTime,LineID,DestinationName,StopPointName'
      }
    })
    .then((response) => {
      component.setState({
        busData: JSON.parse(`[${response.data.replace(/]/g, '],').replace(/\],$/, ']').toString()}]`),
        loading: false
      })
    })
    .catch(() => {
      this.setState({ error: true, loading: false })
    })
  }

  componentDidMount() {
    this.loadData()
    const reloadIntercval = setInterval(() => this.loadData(), 30000)
    this.setState({ reloadIntercval })
  }

  componentWillUmount() {
    clearInterval(this.state.reloadIntercval)
  }

  render() {
    return(
      this.state.loading
        ? <div>'Loading'</div>
        : <LiveBusDepartures data={this.state.busData} />
    )
  }
}

export default ContainerLBD
