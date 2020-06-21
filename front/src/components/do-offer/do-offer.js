import React from 'react';
import "./do-offer.css"
import Button from 'react-bootstrap/Button';

const DoOffer = (props) => {
    return (
    <div className="do-offer__div">
        <Button onClick={()=>{window.location.href="/new-offer"}}>Подать идею/предложение</Button>
    </div>
    );
}


export default DoOffer;