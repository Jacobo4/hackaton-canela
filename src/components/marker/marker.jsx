import React from "react";
import {CgDanger} from 'react-icons/cg';
import Popup from "reactjs-popup";

const Marker = ({props}) => {

    console.log(typeof props.Tipo_agresion)
    const handleClick = () => {
    }


    return (
        <div className={"grid w-9"} onClick={handleClick}>
            <Popup
                trigger={open => (
                    // <CgDanger className={"text-4xl bg-red-500 text-white rounded-full"}/>
                    <button className="button"><CgDanger className={"text-4xl bg-red-500 text-white rounded-full"}/>
                    </button>
                )}
                position="top center"
                closeOnDocumentClick
            >
                <div className={"grid gap-2"}>
                    <h2>{props.name}</h2>
                    <h4>Cantidad de victimas: {props.Victima}</h4>

                    <div>
                        <h4>Tipo:</h4>
                        <ul>Tipo: {props.Tipo_agresion}</ul>
                    {/*<ul>Tipo: {props.Tipo_agresion.map((tipo,i) => (<li>{tipo}</li>))}</ul>*/}
                    </div>
                    <div>
                        <h4>Fuentes:</h4>
                        <ul className={"pl-4 h-16 overflow-y-scroll text-xs"}>
                            {props.Fuente.map((item, i) => (<li key={i}>{item}</li>))}
                        </ul>
                    </div>


                </div>

            </Popup>
        </div>

    );
};

export default Marker;