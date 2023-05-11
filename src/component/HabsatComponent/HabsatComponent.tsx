import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./HabsatComponent.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { IHabsatDataItem } from "container/HabsatComponentsSection/HabsatComponentsSection";
import { FC } from "react";

interface Props {
    data: IHabsatDataItem
}

const habsatComponent: FC<Props> = (props) => {
    return (
        <div className="habsatComponentContainer">
            <div className="habIcon">
                <div className="circleBackground" style={{backgroundColor: "#1890ff"}}>
                    <FontAwesomeIcon icon={props.data.icon as IconProp} className="AwsomeIcon"/>
                </div>
            </div>
            <div className="habContent">
                <h2>{props.data.title}</h2>
                <p>{props.data.content}</p>
            </div>
        </div>
    );
}

export default habsatComponent;
