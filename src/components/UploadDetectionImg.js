import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import './UploadForm.css';

const UploadDetectionImage = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'image/jpg']

    const handleChange = (e) => {
        let selected = e.target.files[0];
        // console.log(selected);

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg or jpg)')
        }

    }

    return (
        <form>
            <label className="UploadMugshot">
                <input style={{ display: "none" }} type="file" onChange={handleChange} />
                <span
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#00acc1",
                        border: "none",
                        borderRadius: "90px",
                        fontSize: "20px",
                        color: "whitesmoke",
                        transition: "0.4s all",
                        boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.3)"
                    }}
                >
                    Upload Detection Image
                </span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadDetectionImage;