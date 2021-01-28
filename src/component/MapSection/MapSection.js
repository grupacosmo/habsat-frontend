import React, {useEffect, useState} from "react"
import 'leaflet/dist/leaflet.css';
import "./MapSection.css"
import {MapContainer, Marker,Popup, TileLayer, Polyline} from "react-leaflet"
import L from 'leaflet';
import balloonSharp from '../../assets/images/hot-air-balloon-sharp.svg';
import GeoJsonData from '../../assets/geoData/GeoJSON.json'


const BalloonIcon = L.icon({
    iconUrl: balloonSharp,
    iconSize: [70, 70], // size of the icon
    iconAnchor: [35, 70], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -65]
});

/**
 *  Ten kod naprawia poprawne wyświetlanie sie ikony markera ma mapie
 */
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

/**
 * Ustwienie domyślnej ikony
 */
// L.Marker.prototype.options.icon = BalloonIcon;


function MapSection(props) {
    const [polylines, setPolylines] = useState(null)
    const [markers, setMarkers] = useState(null)
    const [polygons, setPolygons] = useState(null)

    useEffect(()=>{
        parseGeoData();
    }, [])

    function parseGeoData() {
        const {features} = GeoJsonData

        const polylinesToMap = features.filter((feature) => {
            return feature.geometry.type === "LineString";
        })

        const markersToMap = features.filter((feature) => {
            return feature.geometry.type === "Point";
        })

        const polygonsToMap = features.filter((feature) => {
            return feature.geometry.type === "Polygon";
        })

        setPolylines(polylinesToMap.map((polyline) => {
            const cords = polyline.geometry.coordinates

            return cords.map(point => [point[1], point[0]])
        }))

        const markersCoords = markersToMap.map((marker) => {
            const cords = marker.geometry.coordinates

            return [cords[1], cords[0]]
        })

        setPolygons(polygonsToMap.map((polygon) => {
            const cords = polygon.geometry.coordinates[0]

            return cords.map(point => [point[1], point[0]])
        }))

        setMarkers(markersCoords.map((point, index) => {
            return (
                <Marker position={point} icon={BalloonIcon} key={index}>
                    <Popup>
                        <p>Height: 1000m,</p>
                        <p>Temp: 10°C,</p>
                        <p>Longitude: {point[0]},</p>
                        <p>Latitude: {point[1]},</p>
                    </Popup>
                </Marker>
            )
        }))
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
                <Polyline positions={polylines} pathOptions={{color: "black"}}/>
                {markers}
            </MapContainer>
        </div>

    )
}

export default MapSection;
