import React, { Component } from 'react'

import { messageErrorGeneral } from '../../../config/config.json'

class BusInfo extends Component {
  render() {
    if (this.props.bus[0] === 4) {
      return null
    } else {
      const { bus } = this.props
      return (
          <div className="d-flex w-100 justify-content-start mb-1">
            <p className='mr-2'>{bus[2]}</p>
            <p>{bus[3]}</p>
            <p className="ml-auto">
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
  }
}

class BusDepartures extends Component {
  render() {
    const { data, error, loading } = this.props || []

    return (
      <div className='board-container'>
        <h3>Buses from {data[0][1]}</h3>
        <p className='subheading mb-4'>Live London bus departure information for this stop.</p>
        <div className='error-overlay-container'>
          <div className={error || loading ? 'blur' : 'clear'}>
            {
              data.map(bus => <BusInfo key={bus[4]} bus={bus} />)
            }
          </div>
          <p className='attribution'>Powered by TfL Open Data</p>
          {
            error
              ? <div className='error'>
                  <p>{ messageErrorGeneral }</p>
                  <p>{error}</p>
                </div>
              : null
          }
        </div>
      </div>
    )
  }
}

export default BusDepartures
