import React from 'react'

const Concept2 = () => {
  return (
    <div>
    
          <motion.div
          
            animate={{
              y: 20,
              x: 1000,
              rotate: 360,
    
            }}
            transition={{
              duration: 3,
              delay: 1,
              ease:'anticipate'
            }}
            className="w-[200px] h-[200px] bg-[crimson] border-solid border-4 border-white">
          </motion.div>
    
    
          <motion.h1
            animate={{
              x: 200,
            }}
            transition={
              {
                duration: 3,
    
              }
            }
            className='text-4xl font-bold text-center'>
            This is Arun Kumar
          </motion.h1>
        </div>
  )
}

export default Concept2