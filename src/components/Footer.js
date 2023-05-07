import React from 'react'
import "./Footer.css"

function Footer() {
    const footerImg = require("../assets/images/footer.svg");
    
    return (
        <div className="footer">
            <img src={footerImg}></img>
        </div>
    );
}

export default Footer;