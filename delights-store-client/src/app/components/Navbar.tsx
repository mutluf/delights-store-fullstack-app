import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-12 text-red-300 p-4 flex items-center justify-between border-b-2 border-b-red-300 uppercase'>
        <div>
            <Link href="/">Delighto</Link>
        </div>
        <div>
           <Menu/>
        </div> 
    </div>
  )
}

export default Navbar
