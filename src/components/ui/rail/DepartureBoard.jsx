import React, { Component } from 'react'

import '../../../styles/DepartureBoard.css'

import { messageErrorGeneral } from '../../../../config/config.json'

import Departure from './Departure'

class DepartureBoard extends Component {
  render() {
    const {
      callingPoint,
      departures = [],
      error,
      loading,
      station
    } = this.props

    return (
      <div className='mb-5'>
        <h3>{station.name}</h3>
        <p className='subheading'>
          {`Next trains from this station${callingPoint ? ` calling at ${callingPoint.name}` : '.'}`}
        </p>
        <div className={`error-overlay-container ${loading || error ? 'blur' : 'clear'}`}>
          {
            departures
              .map(service =>
                <Departure key={service.serviceId} service={service} />)
          }
          {
            error
              ? <div className='error'>
                  <p>{ messageErrorGeneral }</p>
                  <p>{ error }</p>
                </div>
              : null
          }
          <p className='attribution'>Powered by National Rail Enquiries</p>
        </div>
      </div>
    )
  }
}

export default DepartureBoard
