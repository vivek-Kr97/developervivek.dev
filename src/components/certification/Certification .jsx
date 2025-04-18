import React from 'react'
import certificate1 from './react.png'
import certificate2 from './htmlcsjs.jpg'
import certificate3 from './JS bootcamp.jpg';

const Certification  = () => {
  const links = [
    {
      add: " https://verify.letsupgrade.in/certificate/LUEJSMAR1251641",
      name:"JavaScript Bootcamp" ,
      org:"letsupgrade" ,
      img: certificate3,
    },
    {
      add: " https://verify.letsupgrade.in/certificate/LUERJSFEB1251284",
      name:"React Bootcamp" ,
      org:"letsupgrade" ,
      img: certificate1,
    },
    {
      add: " https://data-flair.training/verify/7A6327399F-7A45972AF7-735521C2CB/",
      name:"Web Dev with HTML CSS JS Certificate" ,
      org:"Data-flair" ,
      img: certificate2,
    },
    
  ];
  return (
    <div className='bg-gray-900 w-full' 
        id='Certifications'>
        <div className=" text-center py-8 ">
          <h2 className="text-3xl  lg:text-4xl font-bold text-white">
            Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
              A showcase of my professional certifications and achievements.
          </p>
        </div>
      
      <section className='flex flex-wrap justify-center gap-5 mx-5  '>
          {
            links.map((link, index) => {
              return (
                <div className="lg:w-80 md:w-56 mx-auto lg:p-6 p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700 m-4 " key={index}>
                  
                <div  className="h-58 bg-gray-700 rounded-md mb-4 overflow-hidden">
                  <img src={link.img} alt="certificates images"  className='w-full h-full object-cover'/>
                </div>
                <div  className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{link.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{link.org}</p>
                  <a
                    href={link.add}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors "
                  >
                    View Certificate
                  </a>
                </div>
                </div>
              );
            })
          }
      </section>
    
    </div>
  )
}

export default Certification 




