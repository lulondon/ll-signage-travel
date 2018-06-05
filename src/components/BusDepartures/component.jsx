import React, { Component } from 'react'
import posed, { PoseGroup } from 'react-pose'

import { messageErrorGeneral } from '../../../config/config.json'

import './styles.scss'

const busOptions = {
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 }
}

const Bus = posed.div(busOptions)

class BusInfo extends Component {
  render() {
    if (this.props.bus[0] === 4) {
      return null
    } else {
      const { bus } = this.props
      return (
          <div className="bus-departures-container">
            <p className='bus-service'>{bus[2]}</p>
            <p className='bus-destination'>{bus[3]}</p>
            <p className='bus-arrival'>
              {
                Math.round(((
                  Math.abs(new Date(bus[5] - Date.now())) % 86400000
                ) % 3600000) / 60000)
              }
              &nbsp;mins
            </p>
          </div>
      )
    }
  }
}

class BusDepartures extends Component {
  render() {
    const { data, error } = this.props || []

    return (
      <div className='board-container-transparent'>
        <h3 className='board-header'>Buses from {data[0][1]}</h3>
        <p className='subheading mb-4'>Live London bus departure information for this stop.</p>
        <div className='error-overlay-container'>
          <PoseGroup animateOnMount={true}>
            {
              data.map(bus => <Bus key={bus[4]}><BusInfo bus={bus} /></Bus>)
            }
          </PoseGroup>
          <p className='attribution'>Powered by TfL Open Data</p>
          {
            error
              ? <div className='error'>
                  <p>{ messageErrorGeneral }</p>
                  <p>{error}</p>
                </div>
              : null
          }
        </div>
      </div>
    )
  }
}

export default BusDepartures
