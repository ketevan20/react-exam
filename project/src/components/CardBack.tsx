import React from 'react'

type cardBackProps = {
  cvc: string;
}

const CardBack = ({cvc}: cardBackProps) => {
  return (
    <div className='card-back-container'>
        <div style={{width: '100%', height: '20%', backgroundColor: 'rgba(47, 47, 47, 1)'}}></div>
        <div style={{width: '80%', padding: '0.5rem', textAlign: 'end', backgroundColor: 'rgba(173, 181, 190, 1)'}}><p>{cvc || "000"}</p></div>
        <img src='/images/lines.png'/>
    </div>
  )
}

export default CardBack