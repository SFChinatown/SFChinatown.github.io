import React from 'react'
import "./Tile.css"
import TextBlock from "../components/TextBlock"

function Tile({header, body, image}) {
    return (
        <div className="tile">
            <img src={require(`../assets/images/${image}`)}/>
            <TextBlock header={header} body={body}/>
        </div>
    );
}

export default Tile;