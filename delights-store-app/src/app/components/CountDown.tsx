"use client" 
import React from 'react'
import Countdown from 'react-countdown'

const CountDown = () => {
    const endingDate = new Date("2023-12-31")
  return (
      <Countdown date={endingDate} className='font-bold text-5xl text-pink-300 '/>     
  )
}

export default CountDown
