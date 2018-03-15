import React from 'react'

import LiveBusDepartures from '../containers/LiveBusDepartures'

import '../../styles/App.css'

const App = () =>
  <div className='container-fluid'>
    <div className='row py-4'>
      <div className='col-sm col-1'>
        Col 1
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
