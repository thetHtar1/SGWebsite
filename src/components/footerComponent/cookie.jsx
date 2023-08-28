import React, { useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons'
import { useEffect } from 'react';


export default function Cookies() {
 const [showPopup, setShowPopup] = useState(false);

 useEffect(() => {
   setShowPopup(true);
 }, []);

    const handleAccept = () => {
     setCookie('acceptedCookies', 'true', 1)
   // Perform actions when the user accepts the cookies
   setShowPopup(false);
    };
    const removeAccept = () => {
       setShowPopup(false)
   }

 const handlePopupTransitionEnd = () => {
   if (!showPopup) {
     // Perform actions when the pop-up transition is completed and it is not shown anymore
   }
    };
    
     const setCookie = (name, value, days) => {
       const date = new Date();
       date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
       const expires = `expires=${date.toUTCString()}`;
       document.cookie = `${name}=${value}; ${expires}; path=/`;
     };

    return (
      <>
        {showPopup && <div className="pop-upoverlay"></div>}
        <div
          className={`cookie-popup rounded-t-3xl h-64 ss:h-48 md:h-60 ${showPopup ? "show" : ""}`}
          onTransitionEnd={handlePopupTransitionEnd}
        >
          <div className="content px-8">
            <h1 className='text-lg font-medium text-left ml-2 ss:text-2xl md:text-5xl'>Cookies!</h1>
            <p className='text-sm ss:mb-4 ss:mt-4 md:text-lg text-left md:mb-8'>
             Welcome to our website! We use cookies to enhance your user experience and improve the
             quality of our site. By clicking 'Acccept', you consent to our use of cookies. To learn more
             about how we use cookies , please read our Cookie Policy. You can also manage your perferences in 
             your browser settings. Thank you for visiting!
            </p>
            <div className="actions">
              <button className='border-black border-2 px-8 rounded-2xl md:px-20 md:py-1 md:rounded-3xl hover:bg-black hover:text-white text-black' onClick={handleAccept}>Accept</button>
              {/* <button className="absolute right-6 top-4" onClick={removeAccept}>
                <CloseIcon />
              </button> */}
            </div>
          </div>
        </div>
      </>
    );
};