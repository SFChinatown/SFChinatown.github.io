import React from 'react'
import "./ListBlock.css"

function ListBlock({header, body}) {
    const list = body.map((val) => 
    <li className='item'>{val}</li>
    )

    return (
        <div className="block">
            <h4 className="header">{header}</h4>
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default ListBlock;