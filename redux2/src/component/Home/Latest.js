import React from 'react';
import { Link } from 'react-router-dom';

const showLatest = ({latestData}) => {
    if(latestData){
        return latestData.map((data) => {
            return(
                <Link key={data.id} to={`/news/${data.id}`}  className="item">
                    <div className="image_cover"
                        style={{background:`url(/images/articles/${data.img})`}}>
                        <div className="description">
                            <span>{data.category}</span>
                            <div>{data.title}</div>
                        </div>
                    </div>
                </Link>
            )
        })
    }

}

const LatestNews = (props) => {
    // console.log('in latesst', props)
    return(
        <div className="home_latest">
            {showLatest(props)}
        </div>
    )
}

export default LatestNews;