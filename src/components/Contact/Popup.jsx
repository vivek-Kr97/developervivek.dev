import { useState } from "react";
import { FaCopy, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbCopyCheckFilled } from "react-icons/tb";

const Popup = ({ closePopup }) => {
    const portfolioUrl = encodeURIComponent("https://vivek-Kr97.github.io/vivekPortfolio/");
    const title = encodeURIComponent("Check out this awesome portfolio!");
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(portfolioUrl);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Reset after 2s
        } catch (err) {
          console.error("Failed to copy:", err);
        }
      };
  
    return (
      <div className="fixed bottom-72 bg-gray-800 max-h-full flex justify-center items-center z-50 left-1/2 transform -translate-x-1/2 bg-opacity-50">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg lg:w-80 w-60 text-center">
          <h2 className="lg:text-xl text-sm mb-4 text-white">Share My Portfolio</h2>
          <div className="flex justify-around mb-4">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/?text=${title}%20${portfolioUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              onClick={closePopup}
            >
            <FaWhatsapp  className="lg:w-8 h-8 w-5 text-green-500" />
            </a>
  
            {/* Twitter */}
            <a
              href={`https://twitter.com/intent/tweet?text=${title}&url=${portfolioUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              onClick={closePopup}
            >
              <FaXTwitter className="lg:w-8 h-8 w-5 text-gray-200" />
            </a>
  
            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${portfolioUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              onClick={closePopup}
            >
              <FaFacebook  className="text-[#1877F2] lg:w-8 h-8 w-5 " />
            </a>
  
            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${portfolioUrl}&title=${title}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              onClick={closePopup}
            >
              <FaLinkedin className="lg:w-8 h-8 w-5 text-[#0A66C2]" />
            </a>
          
            <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 text-white "
                    aria-label="Copy link"
                    >
                    
                    <span>{copied ? <TbCopyCheckFilled/> : <FaCopy className="lg:w-8 h-8 w-5" />  }</span>
        </button>
          </div>
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="bg-red-500 text-white py-1 px-2 rounded-md mt-4 text-sm"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Popup;
  