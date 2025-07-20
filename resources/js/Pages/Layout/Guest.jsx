import React from 'react'
import Navbar from '../Components/Navbar';
import '../../../css/app.css';
import FooterSection from '../Sections/FooterSection';

const Guest = ({ children }) => {
    return (
        <div className="bg-white">
            <Navbar />
            {children}
            <FooterSection />
        </div>
    );
}

export default Guest