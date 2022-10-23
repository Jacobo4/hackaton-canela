import React, {useEffect, useState} from "react";
import {AiFillAlert} from 'react-icons/ai';
import Popup from "reactjs-popup";
import {useNavigate} from "react-router-dom";
import dangerImg from "./dangerImage.png";

const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [center, setCenter] = useState(null);
    const closeModal = () => setOpenModal(false);
    const navigate = useNavigate();

    const handleAlertBtn = () => {
        navigate('/danger');
    };

     useEffect(() => {


        navigator.geolocation.getCurrentPosition(function (position) {
            setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
        });

    }, []);

    return (
        <div className={"grid w-full h-full place-content-center"}>
            <div onClick={() => setOpenModal(o => !o)} className={"grid place-content-center  w-screen h-screen z-10 cursor-pointer"}>
                <img src={dangerImg} alt="Logo" />

            </div>

            <Popup open={openModal} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                    <a className="close" onClick={closeModal}>
                        &times;
                    </a>
                    <div className={"grid gap-4 p-4 text-center"}>
                        <h3>Are you sure?</h3>
                        {center && <a className={"bg-red-500 text-white font-bold rounded px-4 py-2 border-0"} onClick={handleAlertBtn}
                           href={`sms://+12342337227?body=%f0%9f%9a%a8%f0%9f%9a%a8Help%21%21%20My%20location%20is%3a%20lat%3d%22${center.lat}%22lng%3d%22${center.lng}%22%f0%9f%9a%a8%f0%9f%9a%a8"`}>YES!!!! </a>}
                        {/*<button className={"bg-red-500 text-white font-bold rounded px-4 py-2 border-0"} onClick={handleAlertBtn}>YES!!!!</button>*/}
                    </div>

                </div>
            </Popup>
        </div>
    );
};

export default Home;

// curl -X POST https://api.twilio.com/2010-04-01/Accounts/ACec8466f21f0b006fdc403b453b33e2bf/Messages.json \
//                 --data-urlencode "Body=Amor de lejos, amor de pendejos :sadface:" \
//                 --data-urlencode "From=+12342337227" \
//                 --data-urlencode "To=+573138946439" \
//                 -u ACec8466f21f0b006fdc403b453b33e2bf:1294fad929837821524f05892f5eb4cb