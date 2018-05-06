import React, { Component } from 'react'

class Departure extends Component {
  render() {
    const { service } = this.props

    let serviceInfo = null

    if (service.etd === 'Cancelled') {
      serviceInfo = <p className="service-late">This service has been cancelled.</p>
    } else if (service.etd === 'Delayed') {
      serviceInfo = <p className="service-late">This service is delayed. No further information is available at this time.</p>
    } else if (service.etd !== 'On time') {
      serviceInfo = <p className="service-late">This service is delayed, and is now expected to depart at {service.etd}</p>
    }

    return (
      <div>
        <div className='d-flex justify-content-start service-header mt-3'>
          <p className='m-0 mr-2'>{service.std}</p>
          <p className='m-0' >{service.destination.name}</p>
          <p className='m-0 ml-auto'>{service.platform}</p>
        </div>
        {serviceInfo}
      </div>
    )
  }
}

export default Departure
