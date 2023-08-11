import { useState } from 'react';
import './cardinfo.css';
import CreditCardInput from 'react-credit-card-input';




const CardInfo = ({pack,handlePayment})=>{
    const [cardNumber, setCardNumber] = useState();
    const [expiry, setExpiry] = useState();
    const [cvc, setcvc] = useState();
 
  
    return(
        <>
        <div className="container">
            <div className="cardInfo-box">
                <div className="card-detail">
                    <h1>Complete Payment</h1>
                    <p>Enter your credit or debit card details below</p>
                    <CreditCardInput
                        cardNumberInputProps={{ value: cardNumber, onChange: ()=>setCardNumber(cardNumber)}}
                        cardExpiryInputProps={{ value: expiry, onChange: ()=>setExpiry(expiry) }}
                        cardCVCInputProps={{ value: cvc, onChange: ()=>setcvc(cvc) }}
                        fieldClassName="input"
                    />
                  
                    <button onClick = {handlePayment}>Confirm Payment</button>
                </div>
                <div className="summary">
                    <h1>Order Summary</h1>
                    <div className='Summary-row'>
                        <p>Plan Name</p>
                        <p><strong>{pack.name}</strong></p>
                    </div>
                    <div className='Summary-row'>
                        <p>Billing Cycle</p>
                        <p><strong>{pack.cycle}</strong></p>
                    </div>
                    <div className='Summary-row'>
                        <p>Plan price</p>
                        <p><strong>{`${pack.price} /${pack.cycle=='Monthly'? 'mo':'yr'}`}</strong></p>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default CardInfo;
