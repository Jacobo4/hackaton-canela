import React, {useEffect, useState} from "react";
import GoogleMapReact from 'google-map-react';
import data from './data.json';
import Marker from "../../components/marker/marker.jsx";
import Popup from 'reactjs-popup';



const Map = () => {

    const [center, setCenter] = useState(null);
    const markers = Object.entries(data).map(([key, value], i) => {
        // console.log(value[0].Latitud);
        return (<Marker key={i} lat={value[0].Latitud} lng={value[0].Longitud} props={{
            name: key,
            ...value[0]
        }}/>);
        // return (Marker({text: key, lat: value.lat, lng: value.lng}))
    });
    useEffect(() => {


        navigator.geolocation.getCurrentPosition(function (position) {
            setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
        });

    }, []);

    const defaultProps = {
        zoom: 6
    };
    return (
        <div  style={{height: 'calc(100vh - 56px)', width: '100%'}}>
            {center &&
                <GoogleMapReact
                    bootstrapURLKeys={{key: "AIzaSyBkdCMDvwrkvB8f0eP8iaJ_ChMkKRMOl60"}}
                    defaultCenter={center}
                    defaultZoom={defaultProps.zoom}
                >
                    {/*<Marker*/}
                    {/*    lat={10.99835602}*/}
                    {/*    lng={77.01502627}*/}
                    {/*    text="My Marker"*/}
                    {/*/>*/}
                    {markers}
                </GoogleMapReact>}
        </div>
    );
};

export default Map;
