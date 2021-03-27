import React,{useState} from "react";


import "./MapView.css";
import Map from "../../component/Map/Map";

const MapView = () => {
    const [time,setTime] = useState('step1');
    return (
        <div className="MapContainer">
            <Map timeline={{time: time, setTime: setTime}}/>
            {/*<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a*/}
            {/*    href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>*/}
        </div>
    )
}

export default MapView;