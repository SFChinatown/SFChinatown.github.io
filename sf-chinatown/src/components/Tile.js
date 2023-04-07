import React from 'react'
import "./Tile.css"
import TextBlock from "../components/TextBlock"
import ListBlock from "../components/ListBlock"

function Tile({header, body, image}) {
    let block;
    if (Array.isArray(body)) {
        block = <ListBlock header={header} body={body}/>
    } else {
        block = <TextBlock header={header} body={body}/>
    }
    return (
        <div className="tile">
            <img src={require(`../assets/images/${image}`)}/>
            {block}
        </div>
    );
}

export default Tile;