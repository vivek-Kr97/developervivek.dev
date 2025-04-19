import React from 'react';
import Navbar from './Navbar';
import bg from '../../assets/bg.png';



const Hero = ({ isOpen, setIsopen }) => {
  return (
    <section className='bg-[#121212] h-[100vh] text-white w-full'>
     
      <Navbar/>
      <section className='opacity-0 animate-fadeInUp'>
          
    <div className='container lg:grid lg:grid-cols-[50%_auto]  justify-center items-center lg:justify-evenly h-[89vh] flex flex-col'>


      

          {/* content  */}
              <div className='order-1 text-center lg:text-start'>

                <h1 className='lg:text-3xl text-2xl font-bold mt-6 lg:font-bold uppercase name'
                >Vivek Kumar</h1>
                <p className='mt-4 text-lg font-semibold text-gray-300'><i>I am a Frontend Developer.</i></p>
                <p className='mt-4 lg:text-sm text-xs lg:text-left text-center text-wrap'>Front-end Web Developer who builds beautiful and modern frameworks. Passionate about design, exploring new techniques, and contributing to open-source projects.
                  I build high performance web apps with <a href="https://react.dev/">React.js </a>and <a href="https://nodejs.org/en">Node.js .</a>
                </p>

                <a 
                href="/Vivek_portfolio.pdf"
                download
                className='bg-yellow-500 text-white py-1 mx-auto font-bold px-3 mt-12 rounded-sm lg:hidden block
                hover:text-yellow-500 hover:bg-white w-48 text-[14px] hover:shadow-[0_0_12px_#FFEB3B]'>
                  Download Resume
                </a>
             </div>
             

           {/* image  */}
            <div className='lg:order-1  
            transition-all duration-300 hover:scale-105
            '>
              <img src={bg} alt="" 
                className='rounded-[100%] lg:h-[250px] lg:w-[250px] 
                transition-all duration-300 hover:shadow-[0_0_25px_#00f0ff] hover:shadow-cyan-400
                h-[200px]'/>
            </div>




          </div>
          <div>
          </div>

      </section>
    </section>
  )
}

export default Hero;
