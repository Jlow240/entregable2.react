import React, { useState } from 'react'

const WeatherDate = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    return (
        <div className='text-[13px]'>
            <p>{currentDate.toString()}</p>
        </div>
    );
}




export default WeatherDate