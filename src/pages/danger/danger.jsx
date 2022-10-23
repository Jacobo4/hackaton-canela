//template functional component
import React from "react";
import Webcam from "react-webcam";

const Danger = () => {

    console.log(Webcam)
  return (
    <div className={"grid w-full h-full place-content-center"}>
        <Webcam />
    </div>
  );
};

export default Danger;