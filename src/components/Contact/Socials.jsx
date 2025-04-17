import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'
import SharePortfolio from './SharePortfolio'

const Socials = () => {
  return (
    <>
       {/* Socials */}
       <div className="text-center px-5 rounded-full mx-auto my-auto bg-red-500 py-2 justify-center items-center fixed bottom-5 left-1/2 transform -translate-x-1/2 z-40 bg-white/10 backdrop-blur-md shadow-xl border border-white/20">
        <div className="flex justify-center items-center space-x-4 text-2xl text-gray-300">
          <a
           href="mailto:developervivek.dev@gmail.com?subject=Hello%20Vivek&body=Let's%20connect!"
         
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <MdMail />
          </a>
          <a
            href="https://github.com/vivek-Kr97"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaGithub />

          </a>
          <a
            href="https://www.linkedin.com/in/vivek-Kr97/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/people/V%C3%AEvek-Kumar/100053914440434/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/vivek456kr23/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/vivek_84sia/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaInstagram />
          </a>
         <div>
         <SharePortfolio/>
         </div>
          
        </div>
      </div>

    </>
  )
}

export default Socials
