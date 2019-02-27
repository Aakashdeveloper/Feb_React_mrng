import React, {Component } from 'react';
import { Link } from 'react-router-dom';

class PostItem extends Component{
    constructor(props){
        super(props)

         console.log(props)
        this.state = {
            title: this.props.match.params.details
        }
    }
    render(){
        return(
            <div className="container">
                <div className="panel-success">
                    <div className="panel-heading">
                        {this.state.title}
                    </div>
                    <div className="panel-body">
                        <p>Content for  {this.state.title}</p>

                        <Link to="/posts" className="btn btn-danger">Back</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostItem;