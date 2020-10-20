import React from 'react'
import './ToggleButton.css'

const ToggleButton = props => {
    console.log("is open is from toggle : "+props.isOpen)
    let temp = `nav-icon1 hamburger animated fadeInLeft is-closed ${props.isOpen}`;
    return (
    
    <div type="button" className = {temp}
        data-toggle="offcanvas" onClick={props.click} >
        <span></span>
        <span></span>
        <span></span>
    </div>
);
}

export default ToggleButton;
