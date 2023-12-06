import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image';
import CartIcon from './CartIcon';
import UserLinks from './UserLinks';

const Navbar = () => {
    
  return (
    <div className='h-12 text-red-300 p-4 flex items-center justify-between border-b-2
     border-b-red-300 uppercase md:h-24 lg:px-20 xl:px-40'>
        <div className='hidden md:flex gap-4 flex-1'>
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/">Contact</Link>
        </div>
        <div className='md:font-bold flex-1 md:text-center'>
            <Link href="/">Delighto</Link>
        </div>
        <div className='md:hidden'>
           <Menu/>
        </div> 
        <div className='hidden md:flex gap-4 items-center flex-1 justify-end'>
            <div className='md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer
             bg-pink-200 px-1 rounded-md '>
                <Image src="/temporary/phone.png" alt='' width={20} height={20}></Image>
                <span>123 951 48</span>
            </div>
             <UserLinks/>
        <CartIcon/>                        
        </div>
    </div>
  )
}

export default Navbar
