import React from 'react'
import { useState, useEffect } from 'react'
import './DigitalClock.css'

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timerID = setInterval(() => setTime(new Date()), 1000);
        return () =>{
            clearInterval(timerID);
        } 
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString();
    }

    const formatDate = (date) => {
        return date.toLocaleDateString();
    }
    return (
        <div className='clock-container'>
            <h2 style={{color:'black'}} className='clock-time'>{formatTime(time)}</h2>
            <h3 style={{color:'black'}} className='clock-date'>{formatDate(time)}</h3>
        </div>
    )
}

export default DigitalClock
