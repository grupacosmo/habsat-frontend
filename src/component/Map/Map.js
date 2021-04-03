import React from "react"
import 'leaflet/dist/leaflet.css';
import "./Map.css"
import {MapContainer, Marker, Popup, TileLayer, Polyline} from "react-leaflet"
import L from 'leaflet';
import balloonSharp from '../../assets/images/hot-air-balloon-sharp.svg';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import formatcoords from "formatcoords"


const DefaultIcon = L.icon({
    iconUrl: icon,
    iconAnchor: [12.5, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -41],
    shadowUrl: iconShadow
});

const BalloonIcon = L.icon({
    iconUrl: balloonSharp,
    iconSize: [70, 70], // size of the icon
    iconAnchor: [35, 70], // point of the icon which will correspond to marker's location
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


function Map(props) {
    // const [polyline, setPolyline] = useState(null)
    // const [polygons, setPolygons] = useState(null)
    // const [markers, setMarkers] = useState(null)
    // function parseGeoData() {
    //     const {features} = GeoJsonData
    //
    //     const polylinesToMap = features.filter((feature) => {
    //         return feature.geometry.type === "LineString";
    //     })
    //
    //     const markersToMap = features.filter((feature) => {
    //         return feature.geometry.type === "Point";
    //     })
    //
    //     const polygonsToMap = features.filter((feature) => {
    //         return feature.geometry.type === "Polygon";
    //     })
    //
    //     setPolyline(polylinesToMap.map((polyline) => {
    //         const cords = polyline.geometry.coordinates
    //
    //         return cords.map(point => [point[1], point[0]])
    //     }))
    //
    //     const markersCoords = markersToMap.map((marker) => {
    //         const cords = marker.geometry.coordinates
    //
    //         return [cords[1], cords[0]]
    //     })
    //
    //     setPolygons(polygonsToMap.map((polygon) => {
    //         const cords = polygon.geometry.coordinates[0]
    //
    //         return cords.map(point => [point[1], point[0]])
    //     }))
    //
    //     setMarkers(markersCoords.map((point, index) => {
    //         return (
    //             <Marker position={point}
    //                     icon={index === (markersCoords.length - 1) ? BalloonIcon : DefaultIcon}
    //                     key={index}>
    //                 <Popup>
    //                     <p>Height: 1000m,</p>
    //                     <p>Temp: 10°C,</p>
    //                     <p>Longitude: {point[0]},</p>
    //                     <p>Latitude: {point[1]},</p>
    //                 </Popup>
    //             </Marker>
    //         )
    //     }))
    // }
    const polyline = () => {
        const polylinePath = [];
        props.geoData.forEach((position) => {
            polylinePath.push([position.latitude, position.longitude])
        })
        return polylinePath;
    }

    const markers = () => {
        return props.geoData.map((position, index) => {
            let coords = formatcoords(position.latitude, position.longitude).format({latLonSeparator: ', '}).split(",")
            return (
                <Marker position={[position.latitude, position.longitude]}
                        icon={index === (props.pathLength - 1) ? BalloonIcon : DefaultIcon}
                        key={position.id}>
                    <Popup>
                        <p>Time: {props.formatDate(position.dateTime)}</p>
                        <p>Height: {position.heightInMeters.toFixed(2)}m</p>
                        <p>Temp: {position.temperatureInCelsius.toFixed(2)}°C,</p>
                        <p>Longitude: {coords[0]},</p>
                        <p>Latitude: {coords[1]},</p>
                    </Popup>
                </Marker>
            )
        })
    }

    return (
        <div className="map-container">
            <MapContainer
                center={{lat: 50.08137898440151, lng: 19.994258880615234}}
                zoom={13}
                className="map"
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polyline positions={polyline()} pathOptions={{color: "black"}}/>
                {markers()}
            </MapContainer>
        </div>

    )
}

export default Map;
