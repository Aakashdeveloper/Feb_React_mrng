import React from 'react';

//functional component

const NewsList = (props) => {
    console.log("data in newslist", props);

    // debugger;
    const renderNews = props.newsData.map((data, index) => {
       // debugger;
        return(
            <div key={index}>
                <h3>{data.title}</h3>
                <div>
                    {data.feed}
                </div>
            </div>
        )
    })

    return(
        <div>
        {renderNews}
        </div>
    )
}

export default NewsList;