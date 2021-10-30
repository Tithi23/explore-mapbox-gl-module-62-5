import mapboxgl from "mapbox-gl";
import React, { useEffect } from "react";
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken = 'pk.eyJ1IjoidGl0aGkyMyIsImEiOiJja3ZkbnRoZ3ExaDZwMm5zMXU4amZ0ODg0In0.oGxq5IJhrzotzhOCikz8fw';



const MapDirection = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.389099, 23.791599],
            zoom: 13
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    }, [])
    return (
        <div>
            <div id="map"></div>
        </div>
    );
};



export default MapDirection;
