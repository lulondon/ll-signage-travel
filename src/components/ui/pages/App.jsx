import React from 'react'

import LiveBusDepartures from '../../containers/bus/LiveBusDepartures'
import LiveTubeStatus from '../../containers/tube/LiveTubeStatus'
import DepartureBoard from '../../containers/rail/DepartureBoard'

import '../../../styles/App.css'

import { defaults } from '../../../../config/config.json'

const App = () =>
  <div className='container-fluid'>
    <div className='row py-4'>
      <div className='col-sm col-1'>
        <LiveTubeStatus />
      </div>
      <div className='col-sm col-2'>
        <DepartureBoard
          station={{ name: 'Hackney Wick', code: 'HKW' }}
          filter='SRA'
        />
        <DepartureBoard
          station={{ name: 'Stratford (regional)', code: 'SRA' }}
          filter='CLJ,RMD'
        />
      </div>
      <div className='col-sm col-3'>
        {
          defaults.rail.map(board =>
            <DepartureBoard
              station={board.station}
              callingPoint={board.callingPoint}
              options={{ rows: 5 }}
              key={`${board.station.code}-${board.callingPoint.code}`}
            />)
        }
      </div>
      <div className='col-sm col-4'>
        <LiveBusDepartures stopCode='91431,91432' />
      </div>
    </div>
  </div>

export default App
