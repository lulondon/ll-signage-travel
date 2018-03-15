import React, { Component } from 'react'

class NextBusInfo extends Component {
  render() {
    if (this.props.bus[0] === 4) {
      return null
    } else {
      return (
          <div className="d-flex w-100 justify-content-start mb-1">
            <p className='mr-2'>{this.props.bus[2]}</p>
            <p>{this.props.bus[3]}</p>
            <p className="ml-auto">
              {
                Math.round(((
                  Math.abs(new Date(this.props.bus[5] - Date.now())) % 86400000
                ) % 3600000) / 60000)
              }
              &nbsp;mins
            </p>
          </div>
      )
    }
  }
}

class LiveBusDepartures extends Component {
  render() {
    return (
      <div>{this.props.data.map(bus => <NextBusInfo key={bus[4]} bus={bus} />)}</div>
    )
  }
}

export default LiveBusDepartures
