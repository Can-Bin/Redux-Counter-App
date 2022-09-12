import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "./Counter.css"
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, reset } from '../../redux/counterSlice';



const Counter = () => {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  return (
    <div className='container'>
        <h1 className='header'>CHANGE THE NUMBER</h1>
        <h1 className="number">{count}</h1>
        <Box sx={{display:"flex", justifyContent:"center"}}>
            <Button sx={{m:4}} variant="contained" color="error" onClick={() => dispatch(decrease())}>DECREASE</Button>
            <Button sx={{m:4}} variant="contained" color="secondary" onClick={() => dispatch(reset())}>RESET</Button>
            <Button sx={{m:4}} variant="contained" color="success" onClick={() => dispatch(increase())}>INCREASE</Button>
        </Box>
    </div>
  )
}

export default Counter

