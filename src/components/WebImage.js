import React from 'react'
import ReactRoundedImage from "react-rounded-image";
import logo from './logo.png'


function WebImage() {
    console.log(logo);
 return (
    <div className='logo'>
    <div style={{ display: "flex" }}>
        <ReactRoundedImage image={logo} roundedSize="0" imageWidth="110" imageHeight="110" />
    </div>
    </div>
 );
 
}

export default WebImage;