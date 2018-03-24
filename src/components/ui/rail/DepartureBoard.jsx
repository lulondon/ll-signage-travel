import React, { Component } from 'react'

import '../../../styles/DepartureBoard.css'

import { messageErrorGeneral } from '../../../../config/config.json'

import ServiceHeader from './ServiceHeader'

class DepartureBoard extends Component {
  render() {
    const {
      station,
      callingPoint,
      loading,
      error,
      departures
    } = this.props

    return (
      <div className='mb-5'>
        <h3>{station.name}</h3>
        <p className='departure-board-subheading'>
          {`Next trains from this station${callingPoint ? ` calling at ${callingPoint.name}` : '.'}`}
        </p>
        <div className={`error-overlay-container ${loading || error ? 'blur' : 'clear'}`}>
          {
            departures.map(service =>
              <ServiceHeader key={service.serviceId} service={service} />)
          }
          {
            error
              ? <div className='error'>
                  <p>{ messageErrorGeneral }</p>
                  <p>{ error }</p>
                </div>
              : null
          }
        </div>
      </div>
    )
  }
}

export default DepartureBoard
