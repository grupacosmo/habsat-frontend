import "./HabsatComponent.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const habsatComponent = (props) => {
    return (
        <div className="habsatComponentContainer">
            <div className="habIcon">
                <div className="circleBackground">
                    <FontAwesomeIcon icon={props.data.icon} className="AwsomeIcon"/>
                </div>
            </div>
            <div className="habContent">
                <h2>{props.data.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue facilisis augue, eu
                    consequat magna rhoncus in. Etiam tincidunt eros vitae ultricies efficitur
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue facilisis augue, eu
                    consequat magna rhoncus in. Etiam tincidunt eros vitae ultricies efficitur
                </p>
            </div>
        </div>
    );
}

export default habsatComponent;
