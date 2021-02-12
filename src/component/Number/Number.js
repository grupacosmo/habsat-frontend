import React from 'react';
import './Number.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Number(props)
{
    return(
        <div className="NumberComponent">
            <FontAwesomeIcon className="AwesomeIcon" icon={props.icon}/>
            <div className="NumberValue"><span>{props.number}</span> <span className="NumberUnit">{props.unit}</span></div>
            <div className="NumberMainText">{props.mainText}</div>
            <div className="NumberSecondaryText">{props.secondaryText}</div>
        </div>
    );
}

export default Number;