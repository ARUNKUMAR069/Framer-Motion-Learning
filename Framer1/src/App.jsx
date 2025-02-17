import React from 'react'
import './App.css'
import './index.css'
import { motion } from 'motion/react';
const App = () => {
  return (

    <div>
      <motion.div
        animate={{
          x: 1000,
          y: 500,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1,
        }}
        className="w-[200px] h-[200px] bg-[crimson] border-solid border-4 border-white">
      </motion.div>
      <motion.div
        animate={{
          x: 1100,
          scale: 2,
          revolve: 300,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1,
        }}
        className='rounded-full bg-white w-[200px] h-[200px] border-solid border-4 border-white'>



      </motion.div>
    </div>
  )
}

export default App