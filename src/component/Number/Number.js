import React from 'react';
import './Number.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

function Number(props) {
    return (
        <div className="NumberComponent"  style={{backgroundColor: props.backgroundColor}}>
            <FontAwesomeIcon className="NumberIcon" icon={props.icon}/>
            <div className="NumberValue">
                <CountUp duration={2} end={props.number} redraw={true}>
                    {({countUpRef, start}) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef}/>
                        </VisibilitySensor>
                    )}
                </CountUp>
                <span className="NumberUnit">{props.unit}</span></div>
            <div className="NumberMainText">{props.mainText}</div>
            <div className="NumberSecondaryText">{props.secondaryText}</div>
        </div>
    );
}

export default Number;