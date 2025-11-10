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
                        maxLength={30}
                        className={errors.name ? 'invalid-input' : ''}
                        type='text'
                        placeholder='e.g. Jane Appleseed'
                        value={props.name || ""}
                        onChange={(e) => {
                            const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                            // Replace multiple spaces with a single one
                            const cleanValue = value.replace(/\s+/g, ' ');
                            props.setName(cleanValue.trimStart()); // allow typing first space naturally
                        }} /><br />
                    {errors.name ? <small>{errors.name}</small> : ''}
                </div>
                <div>
                    <label>Card Number</label><br />
                    <input
                        maxLength={19}
                        className={errors.cardNumber ? 'invalid-input' : ''}
                        type='text'
                        value={props.cardNumber || ""}
                        placeholder='e.g. 1234 5678 9123 0000'
                        onChange={(e) => {
                            const raw = e.target.value.replace(/\D/g, '');
                            const formatted = raw.match(/.{1,4}/g)?.join(' ') ?? '';
                            props.setCardNumber(formatted);
                        }} /><br />
                    {errors.cardNumber ? <small>{errors.cardNumber}</small> : ''}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div className='date-container'>
                        <label>Exp. Date (MM/YY)</label><br />
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <input
                                maxLength={2}
                                className={errors.month ? 'invalid-input' : ''}
                                type='number'
                                value={props.month || ""}
                                placeholder='MM'
                                onChange={(e) => {
                                    const value = e.target.value.slice(0, 2);
                                    props.setMonth(value.trim());
                                }} />
                            <input
                                maxLength={2}
                                min={25}
                                value={props.year || ""}
                                className={errors.year ? 'invalid-input' : ''}
                                type='number'
                                placeholder='YY'
                                onChange={(e) => {
                                    const value = e.target.value.slice(0, 2);
                                    props.setYear(value.trim());
                                }} />
                        </div>
                        {errors.date ? <small>{errors.date}</small> : ''}
                    </div>
                    <div className='cvc-container'>
                        <label>CVC</label><br />
                        <input
                            maxLength={3}
                            className={errors.cvc ? 'invalid-input' : ''}
                            type='number'
                            placeholder='e.g. 123'
                            value={props.cvc || ""}
                            onChange={(e) => {
                                const value = e.target.value.slice(0, 3);
                                props.setCvc(value.trim());
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