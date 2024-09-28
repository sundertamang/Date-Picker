import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import './datepicker.css'

import { useState } from 'react'

import React from 'react'

function ReactDatePicker() {

    const [selectedDate,SetSelectedDate] = useState(null)

    const handleDateChange = (date)=>{
        SetSelectedDate(date);
    };

  return (
    <div>
      <div className="wrapper">
      <h1 className='header'>DatePicker</h1>
        <DatePicker
        className='date-component'
        selected={selectedDate}
        onChange={handleDateChange}
    
        />
      </div>
        
    </div>
  )
}

export default ReactDatePicker