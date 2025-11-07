import React, { useState } from 'react'

const Form = (props) => {
    const [errors, setErrors] = useState({});
    const cardNumberRegex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    const cvcRegex = /^[0-9]{3}$/;
    const monthRegex = /^(0[1-9]|1[0-2])$/;
    const yearRegex = /^[0-9]{2}$/;

    function Validate() {
        const newErrors = {};

        if (!props.name.trim()) {
            newErrors.name = "Can't be blank";
        }

        if (!props.cardNumber.trim()) {
            newErrors.cardNumber = "Can't be blank";
        } else if (!cardNumberRegex.test(props.cardNumber)) {
            newErrors.cardNumber = "Wrong format, numbers only";
        }

        if (!props.month.trim()) {
            newErrors.date = "Can't be blank";
            newErrors.month = "invalid";
        } else if (!monthRegex.test(props.month)) {
            newErrors.date = "Wrong date format";
            newErrors.month = "invalid";
        }

        if (!props.year.trim()) {
            newErrors.date = "Can't be blank";
            newErrors.year = "invalid";
        } else if (!yearRegex.test(props.year)) {
            newErrors.date = "Wrong date format";
            newErrors.year = "invalid";
        }

        if (!props.cvc.trim()) {
            newErrors.cvc = "Can't be blank";
        } else if (!cvcRegex.test(props.cvc)) {
            newErrors.cvc = "Wrong format";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }



    return (
        <div className='form'>
            <form className='form-container' onSubmit={(e) => {
                e.preventDefault();
                if (Validate()) {
                    props.handleSubmit();
                }
            }}>
                <div>
                    <label>Cardholder Name</label><br />
                    <input
                        className={errors.name ? 'invalid-input' : ''}
                        type='text'
                        placeholder='e.g. Jane Appleseed'
                        onChange={(e) => {
                            props.setName(e.target.value.trim());
                        }} /><br />
                    {errors.name ? <small>{errors.name}</small> : ''}
                </div>
                <div>
                    <label>Card Number</label><br />
                    <input
                        className={errors.cardNumber ? 'invalid-input' : ''}
                        type='text'
                        placeholder='e.g. 1234 5678 9123 0000'
                        onChange={(e) => {
                            props.setCardNumber(e.target.value.trim());
                        }} /><br />
                    {errors.cardNumber ? <small>{errors.cardNumber}</small> : ''}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div className='date-container'>
                        <label>Exp. Date (MM/YY)</label><br />
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <input
                                className={errors.month ? 'invalid-input' : ''}
                                type='number'
                                placeholder='MM'
                                onChange={(e) => {
                                    props.setMonth(e.target.value.trim());
                                }} />
                            <input
                                className={errors.year ? 'invalid-input' : ''}
                                min={25}
                                type='number'
                                placeholder='YY'
                                onChange={(e) => {
                                    props.setYear(e.target.value.trim());
                                }} />
                        </div>
                        {errors.date ? <small>{errors.date}</small> : ''}
                    </div>
                    <div className='cvc-container'>
                        <label>CVC</label><br />
                        <input
                            className={errors.cvc ? 'invalid-input' : ''}
                            type='number'
                            placeholder='e.g. 123'
                            onChange={(e) => {
                                props.setCvc(e.target.value.trim());
                            }} /><br />
                        {errors.cvc ? <small>{errors.cvc}</small> : ''}
                    </div>
                </div>
                <button type='submit'>Confirm</button>
            </form>
        </div>
    )
}

export default Form