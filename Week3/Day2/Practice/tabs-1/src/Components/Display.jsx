import React from 'react'

const Display = (props) => {
    const{currentTabIndex,data}=props
  return (
    <div className='display'>{data[currentTabIndex].content}</div>
  )
}

export default Display