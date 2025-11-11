import React from 'react'

type cardFrontProps = {
  name: string,
  cardNumber: string,
  month: string,
  year: string
}

const CardFront = ({name, cardNumber, month, year}: cardFrontProps) => {
  return (
    <div className='front-card-container'>
      <div className='circles'>
        <div className='big-circle'></div>
        <div className='small-circle'></div>
      </div>
      <div className='details'>
        <h1>{cardNumber || "0000 0000 0000 0000"}</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p>{name || "Jane Appleseed"}</p>
          <div>
            <span>{month || "00"}/</span>
            <span>{year || "00"}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFront