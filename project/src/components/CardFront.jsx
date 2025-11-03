import React from 'react'

const CardFront = (props) => {
  return (
    <div className='front-card-container'>
        <h1>{props.cardNumber}</h1>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <p>{props.name}</p>
            <div>
                <span>{props.month}</span>/
                <span>{props.year}</span>
            </div>
        </div>
    </div>
  )
}

export default CardFront