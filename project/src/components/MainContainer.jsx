import React, { useEffect, useState } from 'react'
import Form from './Form'
import CardFront from './CardFront';
import CardBack from './CardBack';
import SubmitContainer from './SubmitContainer';

const MainContainer = () => {
    const [name, setName] = useState('Jane Appleseed');
    const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
    const [month, setMonth] = useState('00');
    const [year, setYear] = useState('00');
    const [cvc, setCvc] = useState('000');
    const [submited, setSubmited] = useState(false)

    useEffect(() => {
        if(!name) setName('Jane Appleseed');
        if(!cardNumber) setCardNumber('0000 0000 0000 0000');
        if(!month) setMonth('00');
        if(!year) setYear('00');
        if(!cvc) setCvc('000');
        console.log(submited);
    }, [name, cvc, year, month, cardNumber, submited]);

    function HandleConfirm(name, cardNumber, year, month, cvc) {
        setSubmited(true);
        localStorage.setItem('user', JSON.stringify({'name': name, 'cardNumber': cardNumber, 'month': month, 'year': year, 'cvc': cvc}));
    }

    return (
        <div className='main-container'>
            <div style={{width: '50%', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <CardFront cardNumber={cardNumber} name={name} month={month} year={year} />
                <CardBack cvc={cvc}/>
            </div>
            {!submited ? <Form handleSubmit={HandleConfirm} setName={setName} setCardNumber={setCardNumber} setMonth={setMonth} setYear={setYear} setCvc={setCvc}/> : ''}
            {submited ? <SubmitContainer handleContinue={setSubmited}/> : ''}
        </div>
    )
}

export default MainContainer