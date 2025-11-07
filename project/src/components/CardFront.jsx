import React from 'react'

const CardFront = (props) => {
  return (
    <div className='front-card-container'>
      <div className='circles'>
        <div className='big-circle'></div>
        <div className='small-circle'></div>
      </div>
      <div className='details'>
        <h1>{props.cardNumber || "0000 0000 0000 0000"}</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p>{props.name || "Jane Appleseed"}</p>
          <div>
            <span>{props.month || "00"}/</span>
            <span>{props.year || "00"}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFront