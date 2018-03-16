import React from 'react'

import LiveBusDepartures from '../containers/LiveBusDepartures'
import LiveTubeStatus from '../containers/LiveTubeStatus'

import '../../styles/App.css'

const App = () =>
  <div className='container-fluid'>
    <div className='row pt-3'>
      <div className='col-sm'>
      <h1>LOCAL TRAVEL INFORMATION</h1>
      </div>
    </div>
    <div className='row py-4'>
      <div className='col-sm col-1'>
        <LiveTubeStatus />
      </div>
      <div className='col-sm col-2'>
        <LiveBusDepartures stopCode='91431,91432' />
      </div>
      <div className='col-sm col-3'>
        Col 3
      </div>
    </div>
  </div>

export default App
