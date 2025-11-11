import React, { useRef, useState } from 'react'

type formProps = {
    name: string,
    cardNumber: string,
    month: string,
    year: string,
    cvc: string,
    setName: (value: string) => void,
    setCardNumber: (value: string) => void,
    setMonth: (value: string) => void,
    setYear: (value: string) => void,
    setCvc: (value: string) => void,
    handleSubmit: () => void
}

type ErrorsType = {
  name?: string;
  cardNumber?: string;
  date?: string;
  month?: string;
  year?: string;
  cvc?: string;
};


const Form = ({name, cardNumber, month, year, cvc, setName, setCardNumber, setMonth, setYear, setCvc, handleSubmit}: formProps) => {
    const [errors, setErrors] = useState<ErrorsType>({});
    const cardNumberRegex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    const cvcRegex = /^[0-9]{3}$/;
    const monthRegex = /^(0[1-9]|1[0-2])$/;
    const yearRegex = /^[0-9]{2}$/;

    // const setNameRef = useRef<HTMLInputElement>(null);
    // const setCardNumberRef = useRef('');
    // const setMonthRef = useRef('');
    // const setYearRef = useRef('');
    // const setCvcRef = useRef('');

    function Validate() {
        const newErrors: ErrorsType = {};

        if (!name.trim()) {
            newErrors.name = "Can't be blank";
        }

        if (!cardNumber.trim()) {
            newErrors.cardNumber = "Can't be blank";
        } else if (!cardNumberRegex.test(cardNumber)) {
            newErrors.cardNumber = "Wrong format, numbers only";
        }

        if (!month.trim()) {
            newErrors.date = "Can't be blank";
            newErrors.month = "invalid";
        } else if (!monthRegex.test(month)) {
            newErrors.date = "Wrong date format";
            newErrors.month = "invalid";
        }

        if (!year.trim()) {
            newErrors.date = "Can't be blank";
            newErrors.year = "invalid";
        } else if (!yearRegex.test(year)) {
            newErrors.date = "Wrong date format";
            newErrors.year = "invalid";
        }

        if (!cvc.trim()) {
            newErrors.cvc = "Can't be blank";
        } else if (!cvcRegex.test(cvc)) {
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
                    handleSubmit();
                }
            }}>
                <div>
                    <label>Cardholder Name</label><br />
                    <input
                        maxLength={30}
                        className={errors.name ? 'invalid-input' : ''}
                        type='text'
                        placeholder='e.g. Jane Appleseed'
                        value={name || ""}
                        onChange={(e) => {
                            const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                            const cleanValue = value.replace(/\s+/g, ' ');
                            setName(cleanValue.trimStart()); 
                        }} 
                        /><br />
                    {errors.name ? <small>{errors.name}</small> : ''}
                </div>
                <div>
                    <label>Card Number</label><br />
                    <input
                        maxLength={19}
                        className={errors.cardNumber ? 'invalid-input' : ''}
                        type='text'
                        value={cardNumber || ""}
                        placeholder='e.g. 1234 5678 9123 0000'
                        onChange={(e) => {
                            const raw = e.target.value.replace(/\D/g, '');
                            const formatted = raw.match(/.{1,4}/g)?.join(' ') ?? '';
                            setCardNumber(formatted);
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
                                type='text'
                                value={month || ""}
                                placeholder='MM'
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, '');
                                    setMonth(value.trim());
                                }} />
                            <input
                                maxLength={2}
                                value={year || ""}
                                className={errors.year ? 'invalid-input' : ''}
                                type='text'
                                placeholder='YY'
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, '');
                                    setYear(value.trim());
                                }} />
                        </div>
                        {errors.date ? <small>{errors.date}</small> : ''}
                    </div>
                    <div className='cvc-container'>
                        <label>CVC</label><br />
                        <input
                            maxLength={3}
                            className={errors.cvc ? 'invalid-input' : ''}
                            type='text'
                            placeholder='e.g. 123'
                            value={cvc || ""}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '');
                                setCvc(value.trim());
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