
import React from 'react'
import './App.css'
import './index.css'
import { motion } from 'motion/react';
const App = () => {
  return (
    <div>
      <motion.div className='w-[200px] h-[200px] bg-[crimson] border-solid border-4 border-white'
        animate={{
          x: [0, 1000, 1000, 0, 0],
          y: [20, 20, 400, 400, 20],
        }}
        transition={{
          duration: 3,
          delay: 1,
          repeat:2,
          ease: 'anticipate'
        }}
      >

      </motion.div>
    </div>
  )
}

export default App