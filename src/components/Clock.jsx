import React from 'react'

function Clock({ formatter, date }) {
  return (
    <div>{formatter.format(date)}</div>
  )
}

export default Clock