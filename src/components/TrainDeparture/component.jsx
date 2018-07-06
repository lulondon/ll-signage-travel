import React from 'react'

import './styles.scss'

const TrainDeparture = (props) => {
  const { service } = props

  let serviceInfo = null

  if (service.etd === 'Cancelled') {
    serviceInfo = <p className="service-etd-status">Cancelled</p>
  } else if (service.etd === 'Delayed') {
    serviceInfo = <p className="service-etd-status">Delayed</p>
  } else if (service.etd !== 'On time') {
    serviceInfo = <p className="service-etd-status">Delayed, estimated {service.etd}</p>
  }

  return (
    <div className="train-departure-container">
      <p className="service-destination">{service.destination.name}</p>
      <div className="service-info-container">
        <p className="service-std">{service.std}</p>
        {serviceInfo}
        <p className="service-platform">
          {service.platform ? 'Platform ' : null}
          {service.platform}
        </p>
      </div>
    </div>
  )
}

export default TrainDeparture
