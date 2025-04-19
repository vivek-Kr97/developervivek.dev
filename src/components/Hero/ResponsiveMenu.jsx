import React from 'react';
import { NavLists } from './NavLists';
import { motion } from "framer-motion";

const ResponsiveMenu = ({ isOpen, setIsopen }) => {
  if (!isOpen) return null; 
  return (
    <motion.div
    initial={{ x: '100%' }}
    animate={{ x: 0 }}
    exit={{ x: '100%' }}
    transition={{ type: 'tween', duration: 0.4 }}
    className="fixed right-0 h-screen  w-48 text-black bg-white p-6 z-40 ">
    
    <ul className="flex flex-col justify-center items-center gap-1 font-semibold uppercase cursor-pointer">
                    {
                      NavLists.map((items) => {
                        return(
                         <div className='bg-gray-100 rounded-md w-40 py-2 px-1 text-center'>
                           <li key={items.key}
                          onClick={() => setIsopen(!isOpen)}
                         >
                          <a href={items.link}
                          className='text-[12px]'
                          >
                                      {items.title}
                          </a>
                          </li>
                         </div>
                              );
                                        
                        })
                    }
      </ul>

    </motion.div>
  );
};

export default ResponsiveMenu;
 