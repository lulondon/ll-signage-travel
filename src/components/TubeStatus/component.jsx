import React from 'react'

import { messageErrorGeneral } from '../../../config/config.json'

import TubeLineInfo from '../TubeLineInfo'

import './styles.scss'

const TubeStatusView = (props) => {
  const { data, error, loading } = props

  return (
    <div className="board-container-transparent">
      <h3 className="board-header">Tube</h3>
      <p className="subheading">Visit tfl.gov.uk for more information.</p>
      <div>
        <div>
          {
            data.map(line => <TubeLineInfo line={line} key={line.id} />)
          }
        </div>
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
              <p>{ error }</p>
            </div>
          : null
        }
      </div>
    </div>
  )
}

export default TubeStatusView
