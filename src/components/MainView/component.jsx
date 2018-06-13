import React from 'react'

import AdditionalInformation from '../AdditionalInformation'
import BusDepartures from '../BusDepartures'
import NationalRailDepartures from '../NationalRailDepartures'
import TubeStatus from '../TubeStatus'

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
      <AdditionalInformation />
    </div>
  </div>

export default App
