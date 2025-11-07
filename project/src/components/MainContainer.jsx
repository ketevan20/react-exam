import React, { useEffect, useState } from 'react'
import Form from './Form'
import CardFront from './CardFront';
import CardBack from './CardBack';
import SubmitContainer from './SubmitContainer';

const MainContainer = () => {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [cvc, setCvc] = useState('');
    const [submited, setSubmited] = useState(false)

    useEffect(() => {
        if(!submited) {
            setName('');
            setCardNumber('');
            setMonth('');
            setYear('');
            setCvc('');
        }
    }, [submited])

    function HandleConfirm() {
        setSubmited(true);
        localStorage.setItem('user', JSON.stringify({'name': name, 'cardNumber': cardNumber, 'month': month, 'year': year, 'cvc': cvc}));
    }

    return (
        <div className='main-container'>
            <div className='main-wrapper'>
                <CardFront cardNumber={cardNumber} name={name} month={month} year={year} />
                <CardBack cvc={cvc}/>
            </div>
            {   
                submited ? 
                <SubmitContainer handleContinue={setSubmited}/> :
                <Form name={name} cardNumber={cardNumber} cvc={cvc} month={month} year={year} handleSubmit={HandleConfirm} setName={setName} setCardNumber={setCardNumber} setMonth={setMonth} setYear={setYear} setCvc={setCvc}/> 
            }
        </div>
    )
}

export default MainContainer