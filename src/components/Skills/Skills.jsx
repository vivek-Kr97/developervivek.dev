import React from 'react'
import '../../../src/App.css'
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { SiExpress, SiTailwindcss } from 'react-icons/si'


const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "text-[#7952B3]" },
  { name: "Tailwindcss", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "NodeJs", icon: <FaNodeJs />, color: "text-[#339933]" },
  { name: "Python", icon: <FaPython />, color: "text-blue-500]" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-400" },

 
];



const Skills = () => {
  return (
    <>
    <section className='bg-gray-900 text-white pb-10 pd:mb-16 lg:pb-24' 
              id='Skills'>
        <div>
            {/* skills Banner  */}
            <div className='w-full bg-cover bg-yellow-500  mx-auto '></div>
            <h1 className='relative text-center pt-10 lg:text-4xl text-3xl font-bold mb-4'>Skills</h1>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-10">
            {skills.map((skill, index) => (
              <div key={index} className={`text-7xl ${skill.color} mx-4 `}>
                {skill.icon}
              </div>
            ))}
        </div>







    </section> 
    </>
    
  )
}

export default Skills
