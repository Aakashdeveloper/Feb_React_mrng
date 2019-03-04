import React,{Component} from 'react';
import { connect} from 'react-redux';
import * as actions from '../actions';
import MoviesList from '../components/moviesList';

class App extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.moviesList();
    }

    render(){
        return(
            <div>
               <MoviesList list={this.props.movies}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        movies:state.movies
    }
}

export default connect(mapStateToProps,actions)(App);