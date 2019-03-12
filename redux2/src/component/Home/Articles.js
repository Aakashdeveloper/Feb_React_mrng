import React from 'react';
import { Link } from 'react-router-dom';

const renderArticle =  ({articleData}) => {
    if(articleData){
        return articleData.map((item) => {
            return(
                <Link key={item.id} to={`/news/${item.id}`}  className="item">
                    <div className="left"
                        style={{background:`url(/images/articles/${item.img})`}}>
                    </div>
                    <div className="right">
                        <h3>{item.title}</h3>
                        <div className="category-tag">{item.category}</div>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {item.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {item.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down"></i>
                                {item.likes[1]}
                            </span>
                        </div>
                    </div>
                </Link>
            )
        })
    }

}

const ArticleList = (props) => {
    console.log('in article', props);
    return(
        <div className="other-news">
            <h2>Articles</h2>
            <div className="other-news-items">
                {renderArticle(props)}
            </div>
        </div>
    )
}

export default ArticleList;