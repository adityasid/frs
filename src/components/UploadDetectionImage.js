import React from 'react';
import './UploadDitectionImage.module.css';
import { motion } from 'framer-motion';

class UploadDetectionImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            ImagePath: '',
            file: '',
            imagePreviewUrl: '',
            setSelectedImg: ''
        };
    }

    componentDidMount() {
        console.log(JSON.stringify(this.props, null, 2));
    };

    // handleImageChange = () => {
    //     this.setState({
    //         loading: !imagesLoaded(this.galleryElement)
    //     });
    // };

    handleImageClick = (e) => {
        this.setState({
            ImagePath: e.target.name
        });
        console.log('handleImageClick');
        console.log(e.target.name);
    };

    renderSpinner() {
        if (!this.state.loading) {
            return null;
        }
        return <span className="spinner" />;
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {

        let { imagePreviewUrl } = this.state;
        // let { setSelectedImg } = this.props;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (
                <div

                    className="mt-4 mr-2 ml-2"
                    style={{
                        // backgroundColor: "greenyellow",
                        maxHeight: "100%",
                        position: "relative",
                        maxWidth: "500px",
                        marginTop: "10px",

                    }}
                >
                    <motion.img
                        src={imagePreviewUrl} alt="enlarged pic"
                        // height="300"
                        width={"100%"}
                    />
                </div>

            );
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }


        return (
            <div
                className="gallery"
                ref={element => {
                    this.galleryElement = element;
                }}
                style={{ position: 'relative' }}
            >

                {imagePreviewUrl === '' ? <span></span> :
                    <div
                        className='imgPreview'
                        // onClick={() => setSelectedImg(imagePreviewUrl)}
                        style={{ position: 'relative', float: 'center', cursor: 'pointer', }}>
                        {$imagePreview}
                    </div>}


                <div className="previewComponent">

                    <form onSubmit={(e) => this._handleSubmit(e)}>
                        <label>
                            <input style={{ display: "none" }} type="file" onChange={(e) => this._handleImageChange(e)} />
                            <span
                                className="UploadMugshot"
                                style={{
                                    padding: "10px 20px",
                                    backgroundColor: "#00acc1",
                                    border: "none",
                                    borderRadius: "90px",
                                    fontSize: "20px",
                                    color: "whitesmoke",
                                    transition: "0.4s all",
                                    boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.3)",

                                }}
                            >
                                Upload Detection Image
                            </span>
                        </label>
                    </form>

                </div>

            </div>
        );
    }
}

export default UploadDetectionImage;