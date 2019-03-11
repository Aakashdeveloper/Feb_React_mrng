import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { latestNews } from '../actions';

import LatestNews from '../component/Home/Latest';

class Home extends Component{

    componentDidMount(){
        this.props.latestNews();
    }
    
    render(){
        return(
            <div>
                <LatestNews latestData={this.props.articles.latest}/>
            </div>
        )
    }
}

// recive state
function mapStateToProps(state){
    console.log('state in home', state)
    return{
        articles:state.articles
    }
}

// call actions
function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);