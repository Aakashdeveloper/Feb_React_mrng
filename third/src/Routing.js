import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

// Component
import Home from './components/Home';
import Artist from './components/Artist';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route path="/artist/:artistid" component={Artist}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Routing;