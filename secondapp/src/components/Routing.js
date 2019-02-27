import React,{Component} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom'

// Component
import Posts from './post_file';
import Profile from './profile_file';
import Home from './Home';
import PostItem from './Post_item';
import NotFound from './NotFound_page';
import Lifecycle from './LifeCycle';

class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <header>
                    <nav class="navbar navbar-inverse">
                        <div class="container-fluid">
                            <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span> 
                            </button>
                            <a class="navbar-brand" href="#">React App</a>
                            </div>
                            <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav">
                                <li> <Link to="/">Home</Link></li>
                                <li><Link to="/posts">Posts</Link></li> 
                                <li><Link to="/profile">Profile</Link></li> 
                                <li><Link to="/lifecycle">LifeCycle</Link></li> 
                            </ul>
                            </div>
                        </div>
                    </nav>
                    </header>
                    <Route exact path="/posts" component={Posts}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/profile" component={Profile}></Route>
                    <Route exact path="/posts/:details" component={PostItem}></Route>
                    <Route exact path="/lifecycle" component={Lifecycle}></Route>
                   
                </div>
            </BrowserRouter>
        )
    }
}

export default Routing;


/*
 <Route path="**"  component={NotFound}></Route>
*/