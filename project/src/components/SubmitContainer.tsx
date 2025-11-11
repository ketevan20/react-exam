import React from 'react'

type submitContainerProps = {
  handleContinue: (value: boolean) => void;
}

const SubmitContainer = ({handleContinue}: submitContainerProps) => {
  return (
    <div className='submit-container'>
        <img src='/images/submit.png'/>
        <h2>Thank you!</h2>
        <p>We’ve added your card details</p>
        <button onClick={() => handleContinue(false)}>Continue</button>
    </div>
  )
}

export default SubmitContainer