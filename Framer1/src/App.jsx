import React from 'react'
import './App.css'
import './index.css'
import { motion } from 'motion/react';
const App = () => {
  return (

    <div>
      <motion.div
          animate={{ x: 1000 }}hng
        className="w-[200px] h-[200px] bg-[crimson] border-solid border-4 border-white">
      </motion.div>
    </div>
  )
}

export default App