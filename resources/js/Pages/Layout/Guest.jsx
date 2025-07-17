import React from 'react'
import Navbar from '../Components/Navbar';
import '../../../css/app.css';

const Guest = ({ children }) => {
    return (
        <div className="bg-white">
            <Navbar />
            {children}
        </div>
    );
}

export default Guest