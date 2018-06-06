import React, { Component } from 'react'

import { messageErrorGeneral } from '../../../config/config.json'

import './styles.scss'

class LineInfo extends Component {
  render() {
    const { line } = this.props

    const formatStatusText = lineStatuses => lineStatuses
      .map(status => status.statusSeverityDescription)
      .filter((v, i, a) => a.indexOf(v) === i) // Unique strings only
      .join(', ')

    return (
      line
        ? <div id={line.id} className='line-info'>
            <h4>{line.name}</h4>
            <p className='line-status'>{formatStatusText(line.lineStatuses)}</p>
          </div>
        : null
    )
  }
}

class TubeStatusView extends Component {
  render() {
    const { data, error, loading } = this.props

    return (
      <div className='board-container-transparent'>
        <h3 className='board-header'>Tube</h3>
        <p className='subheading'>Visit tfl.gov.uk for more information.</p>
        <div>
          <div>
            {
              data.map(line => <LineInfo line={line} key={line.id} />)
            }
          </div>
          <div className='board-footer'>
            <p className='attribution'>Powered by TfL Open Data</p>
            {
              loading
              ? <div className='spinner' />
              : null
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

export default TubeStatusView
