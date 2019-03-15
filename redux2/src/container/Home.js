import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { latestNews,articleNews,GalleryNews } from '../actions';

import LatestNews from '../component/Home/Latest';
import ArticleList from '../component/Home/Articles';
import Gallery from '../component/Home/Gallery';

class Home extends Component{

    componentDidMount(){
        this.props.latestNews();
        this.props.articleNews();
        this.props.GalleryNews();
    }
    
    render(){
        return(
            <div>
                <LatestNews latestData={this.props.articles.latest}/>
                <ArticleList articleData={this.props.articles.articleData}/>
                <Gallery galleryData= {this.props.gallery.gal}/>
            </div>
        )
    }
}

// recive state
function mapStateToProps(state){
    // console.log('state in home', state)
    return{
        articles:state.articles,
        gallery:state.gallery
    }
}

// call actions
function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,articleNews,GalleryNews},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);