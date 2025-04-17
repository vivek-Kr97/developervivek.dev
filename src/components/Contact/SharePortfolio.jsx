import { useState } from "react";
import { PiShareFatFill } from "react-icons/pi";
import Popup from "./Popup";

const SharePortfolio = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup); // Toggle popup visibility
  };

  return (
    <div className="hover:text-blue-400 transition" >
      {/* Share Button */}
      <button onClick={handleClick}>
           <PiShareFatFill />
      </button>
     

      {/* Popup */}
      {showPopup && <Popup closePopup={handleClick} />}
    </div>
  );
};

export default SharePortfolio;
