import React from 'react';

function BoxCard(props) {
    return (
    <div className="box_card">
        <img src={props.source} alt="imagelogo"/>
        <h3>{props.info}</h3>
        <h2>{props.value}</h2>

    </div>    
    )
}

function InfoBox(props) {
    return (
        <div className="info-box">
            <h3>{props.title}</h3>
            <h2>{props.time}</h2>
        </div>
    )
}

function RightCard(props) {
    return (
        <div className="r_card">
            <img src={props.icon} alt="imagelogo"/>
            <div className="r_card_text">
                <h3>{props.title}</h3>
                <h4>{props.sub}</h4>
            </div>
            <h4>{props.value}</h4>
        </div>
    )
}

export {BoxCard, InfoBox, RightCard};