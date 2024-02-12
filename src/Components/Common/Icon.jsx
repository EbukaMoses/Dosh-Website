import React from 'react'
import "./Button.css"

const Icon = ({img}) => {
  return (
    <div className='social_icon'>
        <img src={img} alt="" />
    </div>
  )
}

export default Icon