import React, { useEffect } from 'react'
import { NavLists } from './NavLists'
import ResponsiveMenu from './ResponsiveMenu';
import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { CgClose } from 'react-icons/cg';




const Navbar = () => {
    const [isOpen, setIsopen] = useState(false);
    useEffect(() => {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);
  return (
    <nav className='bg-[#121212] sticky top-0 z-50 '>
      <div className='
         flex lg:justify-evenly justify-between items-center py-3 text-yellow-500 mx-4'
         
         >
        <div className='text-lg items-center gap-2 font-bold'>
          <h1 className=' font-righteous '>VIVEK PORTFOLIO</h1>
        </div>
      
     
            {/* Menu Lists*/}

        <div className='hidden lg:block '>
            <ul className='flex items-center space-x-6 '>
                {
                NavLists.map((items) => {
                    return(
                        <li key={items.key}
                        className='hover:font-bold text-xs hover:text-white transition-all duration-300'>
                            <a href={items.link}>
                                {items.title}
                            </a>
                        </li>
                    );
                    
                })
                }
            </ul>
           
       </div>
       <a 
       href='/public/Vivek_portfolio.pdf'
       download
       className='bg-yellow-500 text-white hover:text-yellow-500 hover:bg-white py-1 px-3 font-bold w-auto rounded-sm lg:block hidden
      transition-all duration-300 hover:shadow-[0_0_12px_#FFEB3B] text-[14px]
      '>
        Download Resume
        </a>

          {/* Mobile Hamburger section  */}
          <div className='block lg:hidden  text-2xl cursor-pointer'
            onClick={() => setIsopen(!isOpen)} >
            {isOpen ? <CgClose /> : <IoMenu />}
          </div>
      </div>

     
      {/* Responsive SideBar  */}
      <ResponsiveMenu isOpen ={isOpen} setIsopen={setIsopen}/>
      <div className='h-0.5 bg-yellow-500'></div>
    </nav>
  )
}

export default Navbar;
