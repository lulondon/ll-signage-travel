import React from 'react'

const TubeLineInfo = (props) => {
  const { line } = props

  const formatStatusText = lineStatuses => lineStatuses
    .map(status => status.statusSeverityDescription)
    .filter((v, i, a) => a.indexOf(v) === i) // Unique strings only
    .join(', ')

  return (
    line
      ?
        <div id={line.id} className="line-info">
          <h4>{line.name}</h4>
          <p className="line-status">{formatStatusText(line.lineStatuses)}</p>
        </div>
      : null
  )
}

export default TubeLineInfo
