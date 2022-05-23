import "./HabsatComponent.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const habsatComponent = (props) => {
    return (
        <div className="habsatComponentContainer">
            <div className="habIcon">
                <div className="circleBackground" style={{backgroundColor: "#1890ff"}}>
                    <FontAwesomeIcon icon={props.data.icon} className="AwsomeIcon"/>
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
