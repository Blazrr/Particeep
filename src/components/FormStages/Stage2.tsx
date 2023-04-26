import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { prevStage } from '../../../reducers/formSlice'
import {motion} from "framer-motion"



const Stage2 = () => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(prevStage())
    }
  return (
    <motion.div className='flex justify-center items-center text-bold text-2xl mt-12 flex-col space-y-4 '
    initial={{opacity:0,x:-100}}
    animate={{opacity:1,x:0}}
    exit={{opacity:0,x:100}}
    transition={{duration:1.2,delay:1}}> <p className='text-bold text-2xl text-center'>
        Nothing more To see, This was just a demo 
    </p>
        <Button onClick={handleClick} color='warning' variant="contained">Restart the form</Button>
    </motion.div>
  )
}

export default Stage2