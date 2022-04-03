import React from "react"
import 'leaflet/dist/leaflet.css';
import "./Map.css"
import {MapContainer, Marker, Polyline, Popup, TileLayer} from "react-leaflet"
import L from 'leaflet';
import balloonSharp from '../../assets/images/hot-air-balloon-sharp.svg';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import formatcoords from "formatcoords"


const DefaultIcon = L.icon({
    iconUrl: icon,
    iconAnchor: [12.5, 41],
    iconSize: [25, 41],
    popupAnchor: [0, -41],
    shadowUrl: iconShadow
});

const BalloonIcon = L.icon({
    iconUrl: balloonSharp,
    iconSize: [70, 70],
    iconAnchor: [35, 70],
    popupAnchor: [0, -65]
});

/**
 *  Ten kod naprawia poprawne wyświetlanie sie ikony markera ma mapie
 */
// delete L.Icon.Default.prototype._getIconUrl;
//
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

/**
 * Ustwienie domyślnej ikony
 */
// L.Marker.prototype.options.icon = BalloonIcon;
// L.Marker.prototype.options.icon = DefaultIcon;


const Map = (props) => {

    const polyline = () => {
        const polylinePath = [];
        props.geoData
            .slice(0, props.sliderValue)
            .forEach((position) => {
                polylinePath.push([position.latitude, position.longitude])
            })
        return polylinePath;
    }

    const markers = () => {
        return props.geoData
            .slice(0, props.sliderValue)
            .map((position, index) => {
                let coords = formatcoords(position.latitude, position.longitude).format({latLonSeparator: ', '}).split(",")
                return (
                    <Marker position={[position.latitude, position.longitude]}
                        // icon={DefaultIcon}
                            icon={index === (props.pathLength - 1) ? BalloonIcon : DefaultIcon}
                            key={position.id}>
                        <Popup>
                            <p>Time: {props.formatDate(position.time)}</p>
                            <p>Height: {position.altitude.toFixed(2)}m</p>
                            <p>Temp: {position.temperature.toFixed(2)}°C,</p>
                            <p>Longitude: {coords[0]},</p>
                            <p>Latitude: {coords[1]},</p>
                        </Popup>
                    </Marker>
                )
            }
        )
    }

    let startCoordinates = {lat: 50.08137898440151, lng: 19.994258880615234};
    if (props.geoData.length > 0) {
        const lastPoint = props.geoData[props.geoData.length - 1];
        startCoordinates = {lat: lastPoint.latitude, lng: lastPoint.longitude}
    }

    return (
        <div className="map-container">
            {
                props.geoData.length > 0 ?
                    <MapContainer
                        center={startCoordinates}
                        zoom={5}
                        className="map"
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Polyline positions={polyline()} pathOptions={{color: "black"}}/>
                        {markers()}
                    </MapContainer>
                    :
                    ""
            }
        </div>

    )
}

export default Map;
