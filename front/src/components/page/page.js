import React from 'react';
import "./page.css"

const Page = (props) => {
    return (
    <div className="page__div">
        <img src={props.img} className="page__img" alt="Page IMG"></img>
    </div>
    );
}


export default Page;