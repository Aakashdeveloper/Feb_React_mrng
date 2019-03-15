import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

// Conatiner
import HomeComponent from '../container/Home';
import News from '../container/News';
import GalleryItem from '../container/GalleryItem';

// Component
import Header from './Header';
import Footer from './Footer';



class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>

                        <Route path="/news/:id" component={News}/>
                        <Route path="/galleries/:id" component={GalleryItem}></Route>
                        <Route exact path="/" component={HomeComponent}> </Route>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;