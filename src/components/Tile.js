import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link to={image.link}>
                <img src={require(`../assets/images/${image.path}`)} alt={image.alt} className="tile-image"/>
            </Link>
            {block}
        </div>
    );
}

export default Tile;