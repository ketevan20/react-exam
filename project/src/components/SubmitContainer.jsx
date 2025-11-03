import React from 'react'

const SubmitContainer = (props) => {
  return (
    <div style={{width: '50%'}}>
        <h3>Thank you</h3>
        <p>We’ve added your card details</p>
        <button onClick={() => props.handleContinue(false)}>Continue</button>
    </div>
  )
}

export default SubmitContainer