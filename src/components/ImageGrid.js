import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    const deleteImage = (e) => {
        e.preventDefault();
        console.log("deleteImage: ");
        console.log(e.target.name);
        var itemID = e.target.name;
        var item = document.querySelector(`#${itemID}`);
        // item.style.visibility = 'hidden';
        item.parentNode.removeChild(item);
    }

    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <span id={doc.id} key={doc.id}>
                    <motion.div className="img-wrap"
                        layout
                        whileHover={{ opacity: 1 }} s
                        onClick={() => setSelectedImg(doc.url)}
                    >
                        <motion.img src={doc.url} alt="uploaded pic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            width={100}
                            height={100}

                        />

                    </motion.div>
                    <div style={{ position: "relative", textAlign: "center", marginTop: "5px", overflowX: "auto" }}>
                        Image Name
                        {/* {doc.name} */}
                        <button name={doc.id}
                            onClick={deleteImage}
                            style={{ marginLeft: "90px", borderRadius: "20px" }}
                        >
                            x
                        </button>
                    </div>
                </span>

            ))}
        </div>
    )
}

export default ImageGrid;