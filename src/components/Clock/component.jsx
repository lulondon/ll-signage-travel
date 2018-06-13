import React from 'react'

import './styles.scss'

const Clock = (props) => {
  const time = new Date(props.time)

  return (
    <div className='clock'>
      <h3 className='clockface'>
      {
        `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}`
      }
      </h3>
    </div>
  )
}

export default Clock
