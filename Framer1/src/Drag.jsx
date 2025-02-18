import React from 'react'

const Drag = () => {
    return (
        <div>
            <motion.div className='w-[200px] h-[200px] bg-[crimson] border-solid border-4 border-white'

                drag
                dragConstraints={{
                    top: 0,
                    left: 0,
                    right: 300,
                    bottom: 300,
                }}
                whileDrag={{
                    scale: 0.8
                }}
            >

            </motion.div>

            <motion.button
                className='bg-gradient-to-r from-red-400 to-orange-300 text-black p-2 h-[50px] w-[100px] rounded-md'
                whileHover={{
                    scale: 1.1,
                    textShadow: ['0px 0px 8px rgb(245,255,255)', '0px 0px 8px rgb(205,255,255)', '0px 0px 8px rgb(255,205,255)'],
                    boxShadow: ['0px 0px 8px rgb(255,255,255)', '0px 0px 8px rgb(155,252,195)', '0px 0px 8px rgb(235,135,215)'],

                }}
                transition={
                    {
                        duration: 0.5,
                        yoyo: Infinity,
                    }
                }
                whileTap={{ scale: 0.9 }}
            >
                Click me
            </motion.button>
        </div>
    )
}

export default Drag