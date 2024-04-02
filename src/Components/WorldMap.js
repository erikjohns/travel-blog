import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIconRetina,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
});

const WorldMap = () => {
    const position = [0, 0];

    const markers = [
        { position: [37.4467, 25.3286], text: 'Mykonos, Greece' },
        { position: [47.0707, 15.4395], text: 'Graz, Austria' },
        { position: [48.7596, -113.7870], text: 'Glacier National Park' },
        { position: [40.7128, -74.0060], text: 'New York City' },
        { position: [37.2982, -113.0263], text: 'Zion National Park' },
        { position: [40.7608, -111.8910], text: 'Salt Lake City' },
        { position: [34.0522, -118.2437], text: 'Los Angeles' },
        { position: [47.6062, -122.3321], text: 'Seattle' },
        { position: [37.7749, -122.4194], text: 'San Francisco' },
        { position: [44.2911, -105.5022], text: 'Gillette, WY' },
        { position: [32.7157, -117.1611], text: 'San Diego' },
        { position: [20.8688, -105.4400], text: 'Sayulita, Mexico' },
        { position: [33.4484, -112.0740], text: 'Phoenix' },
        { position: [43.8791, -103.4591], text: 'Mount Rushmore' },
        { position: [44.5904, -104.7158], text: "Devil's Tower, WY" },
        { position: [39.7392, -104.9903], text: 'Denver' },
        { position: [36.1699, -115.1398], text: 'Las Vegas' },
        { position: [52.3676, 4.9041], text: 'Amsterdam' },
        { position: [53.3498, -6.2603], text: 'Dublin' },
        { position: [52.9719, -9.4265], text: 'Cliffs of Moher' },
        { position: [43.7384, 7.4246], text: 'Monaco' },
        { position: [43.7102, 7.2620], text: 'Nice, France' },
        { position: [45.6042, 10.5196], text: 'Lake Garda' },
        { position: [45.4384, 10.9916], text: 'Verona' },
        { position: [41.9028, 12.4964], text: 'Rome' },
        { position: [43.7696, 11.2558], text: 'Florence' },
        { position: [40.6340, 14.6027], text: 'Amalfi Coast' },
        { position: [35.2401, 24.8093], text: 'Crete' },
        { position: [45.4408, 12.3155], text: 'Venice' },
        { position: [48.2082, 16.3738], text: 'Vienna' },
        { position: [47.5623, 13.6479], text: 'Hallstatt' },
        { position: [47.8095, 13.0550], text: 'Salzburg' },
        { position: [48.5216, 9.0576], text: 'Tubingen' },
        { position: [47.4979, 19.0402], text: 'Budapest' },
        { position: [50.0755, 14.4378], text: 'Prague' },
        { position: [36.1627, -86.7816], text: 'Nashville' },
        { position: [43.4799, -110.7624], text: 'Jackson Hole' },
        { position: [43.7904, -110.6818], text: 'Grand Teton National Park' },
        { position: [44.4279, -110.5885], text: 'Yellowstone National Park' },
        { position: [41.8781, -87.6298], text: 'Chicago' },
        { position: [28.5383, -81.3792], text: 'Orlando' },
        { position: [55.6761, 12.5683], text: 'Copenhagen' },
        { position: [48.7758, 9.1829], text: 'Stuttgart' },
        { position: [46.6867, 7.8634], text: 'Interlaken' },
        { position: [46.6249, 8.0340], text: 'Grindelwald' },
        { position: [46.5934, 7.9086], text: 'Lauterbrunnen' },
        { position: [39.2238, 9.1217], text: 'Cagliari' },
        { position: [43.7228, 10.4017], text: 'Pisa' },
        { position: [43.1729, 16.4417], text: 'Hvar' },
        { position: [43.5081, 16.4402], text: 'Split' },
        { position: [42.6507, 18.0944], text: 'Dubrovnik' },
        { position: [46.0569, 14.5058], text: 'Ljubljana' },
        { position: [46.5547, 15.6459], text: 'Maribor' },
        { position: [47.3769, 8.5417], text: 'Zurich' },
        { position: [43.6150, -116.2023], text: 'Boise' },
        { position: [47.6588, -117.4260], text: 'Spokane' },
        { position: [47.6777, -116.7805], text: 'Cour D\'Alene' },
        { position: [42.3601, -71.0589], text: 'Boston' },
        { position: [38.9072, -77.0369], text: 'Washington D.C.' },
        { position: [47.6588, -117.4260], text: 'Spokane' },
        { position: [42.6184, -112.0126], text: 'Lava Hot Springs' },
        { position: [48.4111, -114.3376], text: 'Whitefish' },
        { position: [48.3254, 8.9622], text: 'Hohenzollern Castle' },
    ];

    return (
        <MapContainer center={position} zoom={2} className={"map-container"}>
            <TileLayer
                url='https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png'
                attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker, index) => (
                <Marker key={index} position={marker.position} icon={defaultIcon}>
                    <Popup>{marker.text}</Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

export default WorldMap;