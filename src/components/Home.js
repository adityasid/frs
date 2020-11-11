import React, { useState } from 'react';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Faces from './Faces';
import Modal from './Modal';
import UploadDetectionImage from './UploadDetectionImage';



function Home() {
    const [selectedImg, setSelectedImg] = useState(null);


    return (
        <div className="container-fluid p-4">
            <div
                className="mt-4 rounded"
                style={{
                    height: "400px",
                    boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.3)",
                    paddingTop: "5px",
                    paddingBottom: "10px",
                    // overflowX: "hidden",
                    // overflowY: "auto",
                }}
            >
                <div
                    style={{
                        height: "300px",
                        overflowX: "hidden",
                        overflowY: "auto",
                    }}
                >
                    <ImageGrid setSelectedImg={setSelectedImg} />
                    {selectedImg && (
                        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
                    )}
                </div>

                <UploadForm />
                <br />
            </div>

            <div
                className="row mb-5"
            >
                <div className="col-md-10 mt-5"
                // style={{ backgroundColor: "green" }}
                >
                    <div
                        // className="rounded"
                        style={{
                            minHeight: "400px",
                            // backgroundColor: "whitesmoke",
                            boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.3)",
                            borderRadius: "3px",
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >

                        <UploadDetectionImage setSelectedImg={setSelectedImg} />

                    </div>

                </div>
                <div className="col-md-2 mt-5"
                // style={{ backgroundColor: "blueviolet" }}
                >
                    <div
                        // className="pr-5"
                        style={{
                            minHeight: "400px",
                            maxHeight: "400px",
                            // marginLeft: "-30px",
                            // backgroundColor: "whitesmoke",
                            boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.3)",
                            borderRadius: "3px",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "#00acc1",
                                borderRadius: "3px",
                                marginBottom: "10px",
                                padding: "5px",
                                color: "whitesmoke",
                            }}
                            className="App"
                        >
                            <h5>Count: 07</h5>
                        </div>
                        <div
                            style={{
                                backgroundColor: "#00acc1",
                                borderRadius: "3px",
                                padding: "5px",
                                color: "whitesmoke",

                            }}
                            className="App"
                        >
                            <h5>Faces</h5>
                        </div>

                        <div
                            style={{
                                maxHeight: "300px",
                                overflowX: "hidden",
                                overflowY: "auto",
                                padding: "0 10px"
                            }}
                        >
                            <Faces setSelectedImg={setSelectedImg} />
                        </div>

                    </div>

                </div>

            </div>




        </div>
    );
}


export default Home;