import React from 'react';
import { NavLists } from './NavLists';

const ResponsiveMenu = ({ isOpen, setIsopen }) => {
  if (!isOpen) return null; // Prevent rendering if menu is closed

  return (
    <div className="absolute left-[200px] right-0 mr-3  text-black py-15  my-auto rounded-3xl bg-white z-30  ">
      <ul className="flex flex-col justify-center items-center gap-3 font-semibold uppercase cursor-pointer py-4">
        {
           NavLists.map((items) => {
            return(
              <li key={items.key}
              onClick={() => setIsopen(!isOpen)}>
              <a href={items.link}
              className='text-[12px]'
              >
                           {items.title}
              </a>
              </li>
                  );
                            
            })
        }
      </ul>
    </div>
  );
};

export default ResponsiveMenu;
