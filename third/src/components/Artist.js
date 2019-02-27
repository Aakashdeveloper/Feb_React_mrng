import React, {Component} from 'react';
import Header from './Header';
import './Artist.css';
import AlbumList from './AlbumsList';

const  ReqUrl="http://localhost:7800/artists/";

class Artist extends Component{
    
    constructor(props){
        super(props)

        this.state={
            artist:''
        }
    }

    componentDidMount(){
        const id =  this.props.match.params.artistid;
        fetch(`${ReqUrl}/${id}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                artist:json
            })
        })
    }

    render(){
        return(
            <div> 
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span 
                        style={{background:`url('/images/covers/${this.state.artist.cover}.jpg')`}}>
                        </span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>
                        <div className="bio_text">
                            {this.state.artist.bio}
                        </div>
                    </div>
                    <AlbumList albumList={this.state.artist.albums}/>
                </div>
            </div>
        )
    }
}

export default Artist;