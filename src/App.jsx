import React from 'react';
import './styles/App.css';
import 'reactjs-popup/dist/index.css';
import Home from "./pages/home/home";
import Map from "./pages/map/map";
import Settings from "./pages/settings/settings";
import Taxis from "./pages/taxis/taxi";
import {Route, Routes} from "react-router-dom";
import Layout from "./layout/layout";
import Danger from "./pages/danger/danger.jsx";

function App() {
    return (
        <div className="App h-screen w-screen">

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="map" element={<Map/>}/>
                    <Route path="settings" element={<Settings/>}/>
                    <Route path="taxis" element={<Taxis/>}/>
                    <Route path="danger" element={<Danger/>}/>

                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                    {/*<Route path="*" element={<NoMatch/>}/>*/}
                </Route>
            </Routes>


        </div>
    );
}

export default App;
