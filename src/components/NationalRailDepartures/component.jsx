import React, { Component } from 'react'

import { messageErrorGeneral } from '../../../config/config.json'
import getStationNameByCRS from '../../lib/NationalRailStations'

import TrainDeparture from '../TrainDeparture'

import './styles.css'

class NationalRailDepartures extends Component {
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
        <h3>{station.name || getStationNameByCRS(station.code)}</h3>
        <p className='subheading'>
          {`Next trains from this station${callingPoint ? ` calling at ${callingPoint.name || getStationNameByCRS(callingPoint.code)}` : '.'}`}
        </p>
        <div className={`error-overlay-container ${loading || error ? 'blur' : 'clear'}`}>
          {
            departures
              .map(service =>
                <TrainDeparture key={service.serviceId} service={service} />)
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

export default NationalRailDepartures
