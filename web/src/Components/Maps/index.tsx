import React, { useCallback } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { compose, withProps } from 'recompose';

const MapComponent: React.FC = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC0swLUb-dVREaUyJoz2MDiQMLDkfqUANA&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: '400px' }} />,
        containerElement: <div style={{ height: '400px', marginBottom: '24px' }} />,
        mapElement: <div style={{ height: '400px' }} />,
    }),
    withScriptjs,
    withGoogleMap
)(
    props => {
        const handleClick = useCallback((config) => {
            console.log(config.latLng.lat(), config.latLng.lng());
        }, []);

        return (
            <GoogleMap
                defaultZoom={17}
                defaultCenter={{lat: -23.196650, lng: -52.200080}}
                onClick={handleClick}
            >
                {/* <Marker position={mapProps.position} /> */}
            </GoogleMap>
        );
    }
) as any;

export default MapComponent;