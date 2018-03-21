import React, { Component } from 'react'

import '../../../styles/DepartureBoard.css'

import ServiceHeader from './ServiceHeader'

class DepartureBoard extends Component {
  render() {
    const {
      station,
      callingPoint,
      loading,
      departures
    } = this.props

    return (
      <div className='mb-5'>
        <div>
          <h3>{station.name}</h3>
          <p className='departure-board-subheading'>
          {`Next trains from this station${callingPoint ? ` calling at ${callingPoint.name}` : '.'}`}
          </p>
        </div>
        {
          loading
            ? <div className='loader' />
            : <div className='loader-padding' />
        }
        {departures.map(service =>
          <ServiceHeader key={service.serviceId} service={service} />)
        }
      </div>
    )
  }
}

export default DepartureBoard
