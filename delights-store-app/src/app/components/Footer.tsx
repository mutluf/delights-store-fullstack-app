import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-300 flex items-center justify-between'>
      <Link className='font-bold text-xl' href="/">DELIGHTO</Link>
      <p>ALL RIGTHS RESERVED.</p>
    </div>
  )
}

export default Footer
