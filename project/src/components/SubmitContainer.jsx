import React from 'react'

const SubmitContainer = (props) => {
  return (
    <div className='submit-container'>
        <img src='/images/submit.png'/>
        <h2>Thank you!</h2>
        <p>We’ve added your card details</p>
        <button onClick={() => props.handleContinue(false)}>Continue</button>
    </div>
  )
}

export default SubmitContainer