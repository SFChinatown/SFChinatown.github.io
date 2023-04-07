import React from 'react'
import "./TextBlock.css"

function TextBlock({header, body}) {
    return (
        <div className="block">
            <h4 className="header">{header}</h4>
            <p className="body">{body}</p>
        </div>
    );
}

export default TextBlock;