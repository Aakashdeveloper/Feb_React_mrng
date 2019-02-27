import React, {Component} from 'react';

// Component
import Banner from './Banner';
import ArtistList from './ArtistList';

const URL_ARTIST = 'http://localhost:7800/artists';

class Home extends Component{
    constructor(props){
        super(props);

        this.state={
            artists: ''
        }
    }

    componentDidMount(){
        fetch(URL_ARTIST, {
            method:'GET'
        })
        .then((response) => response.json())
        .then((data) => {
            this.setState({artists:data})
        })
    }

    render(){
        return(
            <div>
                <Banner/>
                <ArtistList list={this.state.artists}></ArtistList>
            </div>
        )
    }
}

export default Home