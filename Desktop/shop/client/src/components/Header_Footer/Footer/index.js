import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';



const Footer = () => {
    return (
        <footer className="bck_b_dark">
            <div className="container">  
            <div className="logo">
                Tims Comic's
                </div> 
            <div className="wrapper">
            <div className="left">
                <h2>Contact Information</h2>
                <div className="business_nfo">
                    <div className="tag">
                        <FontAwesomeIcon
                            icon={faCompass}
                            className="icon"
                        
                        
                        />
                    <div className="nfo">
                        <div>Address</div>
                        <div>1234 Pigeon Street</div>

                    </div>
                    </div>
                    <div className="tag">
                        <FontAwesomeIcon
                            icon={faPhone}
                            className="icon"
                        
                        
                        />
                    <div className="nfo">
                        <div>Phone</div>
                        <div>0141</div>

                    </div>
                    </div>
                    <div className="tag">
                        <FontAwesomeIcon
                            icon={faClock}
                            className="icon"
                        />
                    <div className="nfo">
                        <div>Clock</div>
                        <div>Opening Times</div>

                    </div>
                    </div>
                    <div className="tag">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="icon"
                        
                        
                        />
                    <div className="nfo">
                        <div>Email</div>
                        <div>TimComic2monkey.com</div>

                    </div>
                    </div>


                </div>
            </div>
            <div className="left"> 
            <h2> Join our mailing list for the latest comics</h2>
            <div>
                <div>
                Monkey eat bananan
                </div>

            </div>
            </div>
            </div>
           </div>
        </footer>
    );
};

export default Footer;