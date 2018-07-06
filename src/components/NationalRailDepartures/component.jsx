import React from 'react'
import posed, { PoseGroup } from 'react-pose'

import { messageErrorGeneral } from '../../../config/config.json'
import getStationNameByCRS from '../../lib/NationalRailStations'

import TrainDeparture from '../TrainDeparture'

import './styles.css'

const trainOptions = {
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
}

const Train = posed.div(trainOptions)

const NationalRailDepartures = (props) => {
  const {
    callingPoint,
    departures = [],
    error,
    loading,
    station,
  } = props

  return (
    <div className="board-container-transparent">
      <h3 className="board-header">{station.name || getStationNameByCRS(station.code)}</h3>
      <p className="subheading">
        {`Next trains from this station${callingPoint ? ` calling at ${callingPoint.name || getStationNameByCRS(callingPoint.code)}` : '.'}`}
      </p>
      <PoseGroup>
        {
          departures
            .map(service =>
              <Train key={service.serviceId}><TrainDeparture service={service} /></Train>)
        }
      </PoseGroup>
      {
        error
          ?
            <div className="error">
              <p>{ messageErrorGeneral }</p>
              <p>{ error }</p>
            </div>
          : null
      }
      <div className="board-footer">
        <p className="attribution">Powered by National Rail Enquiries</p>
        {
          loading
          ? <div className="spinner" />
          : null
        }
      </div>
    </div>
  )
}

export default NationalRailDepartures
