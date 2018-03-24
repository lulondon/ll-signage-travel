import React, { Component } from 'react'

import { messageErrorGeneral } from '../../../../config/config.json'

import '../../../styles/LiveTubeStatus.css'

class LineInfo extends Component {
  render() {
    const { line } = this.props

    const formatStatusText = lineStatuses => lineStatuses
      .map(status => status.statusSeverityDescription)
      .filter((v, i, a) => a.indexOf(v) === i) // Unique strings only
      .join(', ')

    return (
      line
        ? <div id={line.id} className='line-info py-2'>
            <h5 className='mb-0'>{line.name}</h5>
            <p className='line-status m-0'>{formatStatusText(line.lineStatuses)}</p>
          </div>
        : null
    )
  }
}

class LiveTubeStatus extends Component {
  render() {
    const { data, error, loading } = this.props
    return (
      <div>
        <h3>Tube & Rail</h3>
        <p className='subheading'>Visit tfl.gov.uk for more information.</p>
        <div className='error-overlay-container'>
          <div className={loading || error ? 'blur' : 'clear'}>
            {
              data.map(line => <LineInfo line={line} key={line.id} />)
            }
          </div>
          {
            error
            ? <div className='error'>
                <p>{ messageErrorGeneral }</p>
                <p>{ error }</p>
              </div>
            : null
          }
        </div>
      </div>
    )
  }
}

export default LiveTubeStatus
