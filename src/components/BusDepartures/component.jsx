import React from 'react'
import posed, { PoseGroup } from 'react-pose'

import { messageErrorGeneral } from '../../../config/config.json'

import BusDeparture from '../BusDeparture'

import './styles.scss'

const busOptions = {
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
}

const BusDepartureWrapper = posed.div(busOptions)

const BusDepartures = (props) => {
  const { data, error, loading } = props || []

  return (
    <div className="board-container-transparent">
      <h3 className="board-header">Buses from {data[0][1]}</h3>
      <p className="subheading mb-4">Live London bus departure information for this stop.</p>
      <div className="error-overlay-container">
        <PoseGroup animateOnMount>
          {
            data.map(bus => (
              <BusDepartureWrapper key={bus[4]}>
                <BusDeparture bus={bus} />
              </BusDepartureWrapper>))
          }
        </PoseGroup>
        <div className="board-footer">
          <p className="attribution">Powered by TfL Open Data</p>
          {
            loading
            ? <div className="spinner" />
            : null
          }
        </div>
        {
          error
            ?
              <div className="error">
                <p>{ messageErrorGeneral }</p>
                <p>{error}</p>
              </div>
            : null
        }
      </div>
    </div>
  )
}

export default BusDepartures
