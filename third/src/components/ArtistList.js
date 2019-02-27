import React from 'react';
import { Link } from 'react-router-dom';
import './artistList.css';

const ArtistList = (props) => {
    const renderList = ({list}) => {
        if(list){
            return list.map((item) => {
                const style={
                    background:`url('/images/covers/${item.cover}.jpg') no-repeat`
                }
                return(
                    <Link to={`/artist/${item.id}`} key={item.id}
                    style={style}
                    className="artist_item">
                    <div>{item.name}</div>
                    </Link>
                )
            })
        }
    }
    return(
        <div className="artist_list">
            <h4> Browse the Artists</h4>
            {renderList(props)}
        </div>
    )
}

export default ArtistList;