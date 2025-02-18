import React from 'react'

const ImageAniamtion = () => {
    return (
        <div>

            <motion.img
                initial={{
                    y: 20,
                    x: 1000,
                }}
                animate={{
                    y: 20,
                    x: -600,
                }}
                transition={
                    {
                        duration: 3,
                        delay: 1,
                        ease: 'anticipate'
                    }
                }
                src='./src/assets/download.png'
            >



            </motion.img>


        </div>
    )
}

export default ImageAniamtion