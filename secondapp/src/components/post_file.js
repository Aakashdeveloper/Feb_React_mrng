import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './post_file.css';

class Posts extends Component{
    constructor(props){
        super(props)

        console.log('postfile', this.props);
    }
    render(){
        return(
            <div className="container">
            <hr/>
            
            <h2>About javascript </h2><Link to="/posts/About javascript?name='John'">Details</Link>
            <h2>lets Code React </h2><Link to="/posts/Lets Code React?name='Andy'">Details</Link>
            <h2>New to  Coding </h2><Link to="/posts/New to  Coding?name='Marry'">Details</Link>
            </div>
        )
    }
}

export default Posts;