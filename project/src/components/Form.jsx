import React, { useState } from 'react'

const Form = (props) => {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [cvc, setCvc] = useState('');

    const cardNumberRegex = /^[0-9]{16}$/;
    const cvcRegex = /^[0-9]{3}$/;


    return (
        <div style={{width: '50%'}}>
            <form className='form-container' onSubmit={(e) => {
                e.preventDefault();
                if(name.trim() && cardNumber.trim() && year.trim() && month.trim() && cvc.trim() 
                    && cardNumberRegex.test(cardNumber) && cvcRegex.test(cvc)) {
                        props.handleSubmit(name, cardNumber, year, month, cvc);
                } else {
                    alert('invalid input');
                }
            }}>
                <div>
                    <label>Cardholder Name</label><br/>
                    <input
                        type='text'
                        placeholder='e.g. Jane Appleseed'
                        onChange={(e) => {
                            setName(e.target.value);
                            props.setName(e.target.value.trim());
                        }} />
                </div>
                <div>
                    <label>Card Number</label><br/>
                    <input
                        type='text'
                        placeholder='e.g. 1234 5678 9123 0000'
                        onChange={(e) => {
                            setCardNumber(e.target.value);
                            props.setCardNumber(e.target.value.trim());
                        }} />
                </div>
                <div style={{display: 'flex', gap: '1rem'}}>
                    <div>
                        <label>Exp. Date (MM/YY)</label><br/>
                        <div style={{display: 'flex', gap: '1rem'}}>
                            <input
                                type='number'
                                min="1" 
                                max="12"
                                placeholder='MM'
                                onChange={(e) => {
                                    setMonth(e.target.value);
                                    props.setMonth(e.target.value.trim());
                                }} />
                            <input
                                min="2025" 
                                max="3000" 
                                step="1"
                                type='number'
                                placeholder='YY'
                                onChange={(e) => {
                                    setYear(e.target.value);
                                    props.setYear(e.target.value.trim());
                                }} />
                        </div>
                    </div>
                    <div>
                        <label>CVC</label><br/>
                        <input
                            type='number'
                            placeholder='e.g. 123'
                            onChange={(e) => {
                                setCvc(e.target.value);
                                props.setCvc(e.target.value.trim());
                            }} />
                    </div>
                </div>
                <button type='submit'>Confirm</button>
            </form>
        </div>
    )
}

export default Form