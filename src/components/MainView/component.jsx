import React from 'react'

import BusDepartures from '../BusDepartures'
import TubeStatus from '../TubeStatus'
import NationalRailDepartures from '../NationalRailDepartures'

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
        station={{ code: 'HKW' }}
        filter='SRA'
      />
      <NationalRailDepartures
        station={{ name: 'Stratford (regional trains)', code: 'SRA' }}
        filter='CLJ,RMD,LST'
      />
    </div>
    <div className='col-3'>
      <NationalRailDepartures
        station={{ code: 'SFA' }}
        callingPoint={{ code: 'STP' }}
      />
    </div>
    <div className='col-4'>
      <BusDepartures stopCode='91431,91432' />
    </div>
  </div>

export default App
