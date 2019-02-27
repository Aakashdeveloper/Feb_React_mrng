import React from 'react'
import './Artist.css';

const AlbumList = (props) => {
    const showList = ({albumList}) => {
        if(albumList){
            return albumList.map((item, index)=> {
                return(
                    <div>
                        <img key={index} src={`/images/albums/${item.cover}.jpg`}/>
                    </div>
                )
            })
        }
    }

    return(
        <div className="album_list">
        {showList(props)}
     </div>
    )
}

export default AlbumList;