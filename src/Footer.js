import React from 'react';

const Footer = () => { 
    return (
        <footer className=" py-3">
            <p className="text-center">
                Copyright &copy; AI Infotech Solutions All rights reserved | Design by Rajvardhan.
            </p>
            <div className="text-center">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon"><i className='fab fa-facebook-f'></i></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon"><i className='fab fa-twitter'></i></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon"><i className='fab fa-instagram'></i></a>
            </div>
        </footer>
    );
}

export default Footer;
