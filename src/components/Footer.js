import React from 'react';

const Footer = () => {
    return (
        <div className="flex justify-center items-center h-16 bg-black text-white">
            <p><small>Copyright © {new Date().getFullYear()} Food Monster All right reserved</small></p>
        </div>
    );
};

export default Footer;