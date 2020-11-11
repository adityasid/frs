import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const Faces = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    return (
        <div className="App Faces-img-grid">
            {docs && docs.map(doc => (
                <span key={doc.id}>
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
                        {/* <motion.div  >
                            Name
                        </motion.div> */}

                    </motion.div>
                </span>

            ))}
        </div>
    )
}

export default Faces;