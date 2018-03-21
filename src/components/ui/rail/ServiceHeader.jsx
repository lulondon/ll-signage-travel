import React, { Component } from 'react'

class ServiceHeader extends Component {
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
        <h5 className='mb-0'>
          <div className='d-flex justify-content-start p-0 mt-3 service-header'>
            <p className='m-0 mr-2'>{service.std}</p>
            <p className='m-0' >{service.destination.name}</p>
            <p className='m-0 ml-auto'>{service.platform}</p>
          </div>
        </h5>
        {serviceInfo}
      </div>
    )
  }
}

export default ServiceHeader
