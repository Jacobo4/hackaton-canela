import { FaTaxi,FaMapMarkedAlt } from 'react-icons/fa';
import {IoSettingsSharp} from 'react-icons/io5';
import {AiFillHome} from 'react-icons/ai';
import React from 'react'
import {Link} from "react-router-dom";

export const BottomNav = () => {
    return (
        <div className="z-50 fixed bottom-0 w-full bg-gray-200 grid grid-flow-col items-center text-white text-2xl rounded-t-xl overflow-hidden ">
            <Link to="/taxis" className="grid bg-blue-500 p-4 justify-center w-100"><FaTaxi/></Link>
            <Link to="/map" className="grid bg-blue-500 p-4 justify-center w-100"><FaMapMarkedAlt/></Link>
            <Link to="/" className="grid bg-blue-500 p-4 justify-center w-100"><AiFillHome/></Link>
            <Link to="/settings" className="grid bg-blue-500 p-4 justify-center w-100"><IoSettingsSharp/></Link>
        </div>
    )
}

export default BottomNav;