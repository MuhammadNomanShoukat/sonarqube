import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import "./scroll-up.style.scss"

const ScrollUp = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });


        // Add a scroll event listener to show/hide the button
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if(showScrollButton){
        return (
            <div className='scroll-up-arrow' onClick={()=>scrollToTop()}>
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
          )
    }else{
        return;
    }
  
}

export default ScrollUp
