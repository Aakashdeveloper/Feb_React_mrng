import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

// Conatiner
import HomeComponent from '../container/Home';

// Component
import Header from './Header';
import Footer from './Footer';



class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                        <Route exact path="/" component={HomeComponent}> </Route>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;