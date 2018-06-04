import React from 'react'

import BusDepartures from '../BusDepartures'
import TubeStatus from '../TubeStatus'
import NationalRailDepartures from '../NationalRailDepartures'

import { defaults } from '../../../config/config.json'

const App = () =>
  <div className='grid-container'>
    <div className='page-title'>
      TRAVEL INFORMATION
    </div>
    <div className='col-1'>
      <TubeStatus />
    </div>
    <div className='col-2'>
      <NationalRailDepartures
        station={{ name: 'Hackney Wick', code: 'HKW' }}
        filter='SRA'
      />
      <NationalRailDepartures
        station={{ name: 'Stratford (regional)', code: 'SRA' }}
        filter='CLJ,RMD'
      />
    </div>
    <div className='col-3'>
      {
        defaults.rail.map(board =>
          <NationalRailDepartures
            station={board.station}
            callingPoint={board.callingPoint}
            options={{ rows: 5 }}
            key={`${board.station.code}-${board.callingPoint.code}`}
          />)
      }
    </div>
    <div className='col-4'>
      <BusDepartures stopCode='91431,91432' />
    </div>
  </div>

export default App
