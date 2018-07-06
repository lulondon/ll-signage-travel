import React from 'react'

const BusDeparture = (props) => {
  if (props.bus[0] === 4) {
    return null
  }

  const { bus } = props
  return (
    <div className="bus-departures-container">
      <p className="bus-service">{bus[2]}</p>
      <p className="bus-destination">{bus[3]}</p>
      <p className="bus-arrival">
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

export default BusDeparture
