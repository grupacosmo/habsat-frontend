import './Number.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import "../HabsatComponent/HabsatComponent";
import { INumbersDataItem } from 'container/NumbersSection/NumbersSection';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Number = (props: INumbersDataItem) => {
    return (
        <div className="numberContainer" style={{width:"100%"  }}>
            <div className="numberContent">
                <div className="numberHeader">
                    <div className="habIcon">
                        <div className="circleBackground" style={{ backgroundColor: "#1890ff" }}>
                            <FontAwesomeIcon icon={props.icon as IconProp} className="AwsomeIcon" />
                        </div>
                    </div>
                    <div className="NumberValue">
                        <CountUp duration={2} end={props.number} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <span className="NumberUnit">{props.unit}</span>
                    </div>
                </div>
                <div className="NumberMainText">{props.mainText}</div>
                <div className="NumberSecondaryText">{props.secondaryText}</div>
            </div>
        </div>
    );
}

export default Number;