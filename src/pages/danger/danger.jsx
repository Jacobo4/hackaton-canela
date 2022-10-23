import React, {useCallback, useEffect, useRef, useState} from "react";
import Webcam from "react-webcam";

const Danger = () => {

    const webcamRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [capturing, setCapturing] = useState(false);
    const [recordedChunks, setRecordedChunks] = useState([]);

    // useEffect(() => {
    //
    //
    //     handleStartCaptureClick();
    //
    // }, []);

    const handleStartCaptureClick = useCallback(() => {
        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
            mimeType: "video/webm"
        });
        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handleDataAvailable
        );
        mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);

    const handleDataAvailable = useCallback(
        ({data}) => {
            if (data.size > 0) {
                setRecordedChunks((prev) => prev.concat(data));
            }
        },
        [setRecordedChunks]
    );

    const handleStopCaptureClick = useCallback(() => {
        mediaRecorderRef.current.stop();
        setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing]);

    const handleDownload = useCallback(() => {


        if (recordedChunks.length) {
            const blob = new Blob(recordedChunks, {
                type: "video/webm"
            });
            var myHeaders = new Headers();
            myHeaders.append("Cookie", "csrftoken=8p90ZUdzHT8NktpOSHlmb8t0IIj4BavzfkKnGNLfF3ljBC7uk50BnoQR4dPbE6fB");

            var formdata = new FormData();
            formdata.append("file", new File([blob], "filename"), "teAmoJhon.mp4");

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://app-canela.herokuapp.com/save_media/", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

            // const url = URL.createObjectURL(blob);
            // const a = document.createElement("a");
            // document.body.appendChild(a);
            // a.style = "display: none";
            // a.href = url;
            // a.download = "react-webcam-stream-capture.webm";
            // a.click();
            // window.URL.revokeObjectURL(url);
            // setRecordedChunks([]);
        }
    }, [recordedChunks]);
//webgook rules
    //Cachear

    return (
        <div className={"grid w-full h-full place-content-center"}>
            <Webcam audio={true} ref={webcamRef}/>

            <div className={"grid gap-2 justify-center mt-8"}>
                {/*<button className={"grid"}>Camara</button>*/}
                {/*<button className={"grid"}>Microfono</button>*/}
                {capturing ? (
                    <button className={"grid bg-red-500 text-white font-bold rounded px-4 py-2 border-0 max-w-xs"}
                            onClick={handleStopCaptureClick}>Stop Capture</button>
                ) : (
                    <button className={"grid bg-green-500 text-white font-bold rounded px-4 py-2 border-0 max-w-xs"}
                            onClick={handleStartCaptureClick}>Start Capture</button>
                )}
                {recordedChunks.length > 0 && (
                    <button className={"grid bg-red-500 text-white font-bold rounded px-4 py-2 border-0 max-w-xs"}
                            onClick={handleDownload}>Download</button>
                )}

            </div>
        </div>
    );
};

export default Danger;