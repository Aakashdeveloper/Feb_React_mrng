import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedNews, clearSelectedNews } from '../actions';


class News extends Component{

    componentDidMount(){
        console.log(this.props.match.params.id);
        this.props.selectedNews(this.props.match.params.id);
    }

    componentWillUnmount(){
      this.props.clearSelectedNews();
    }

    renderNews = ({selectedNews}) => {
        if(selectedNews){
            return selectedNews.map((item) => {
                return(
                    <div key={item.id}>
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
                        <div className="top">
                            <h2>{item.title}</h2>
                            <span>Artilce By: <strong>{item.author}</strong></span>
                        </div>
                        <img src={`/images/articles/${item.img}`}/>
                        <div className="body_news">
                            {item.body}
                        </div>
                    </div>
                )
            })
        }
    }
    
    render(){
        return(
            <div className="news_container">
                {this.renderNews(this.props.articles)}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('state in news', state)
    return{
        articles: state.articles
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({selectedNews,clearSelectedNews},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(News);


