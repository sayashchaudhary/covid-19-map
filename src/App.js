import React, {useRef, useEffect} from "react";
import mapboxgl from "mapbox-gl";
import useSWR from "swr";
import lookup from "country-code-lookup";

import "./App.scss";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1Ijoic2F5YXNoY2hhdWRoYXJ5IiwiYSI6ImNrOHEwM3ZpMTAwOGYzZ29pM25lazB5bWUifQ.ippMYsFD1UUljqd9NDZTIQ";

function App() {
    const mapboxElRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapboxElRef.current,
            style: "mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k",
            center: [16, 27],
            zoom: 2
        });
        map.addControl(new mapboxgl.NavigationControl());
    }, []);

    return (
        <div className="App">
            <div className="mapContainer">
                <div className="mapBox" ref={mapboxElRef}/>
            </div>
        </div>
    );
}

export default App;
