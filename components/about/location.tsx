'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// @ts-ignore
const customIcon = new L.divIcon({
    className: 'location-icon',
    iconSize: [20, 20]  // 调整为与 CSS 中定义的大小相匹配
});

type MapProps = {
    latitude: number;
    longitude: number;
};

const LocationMap: React.FC<MapProps> = ({ latitude, longitude }) => {
    return (
        <MapContainer className={"z-0 w-full h-full"} center={[latitude, longitude]} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[latitude, longitude]} icon={customIcon} />
        </MapContainer>
    );
};

export default LocationMap;
