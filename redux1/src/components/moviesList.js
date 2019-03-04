import React,{Component} from 'react';


class MoviesList extends Component{

    renderList = ({list}) => {
        if(list){
            return list.map((data, index)=>{
                return(
                    <div key={index}>{data.name}</div>
                )
            })
        } 
    }
    render(){
        return(
            <div>
                {this.renderList(this.props)}
            </div>
        )
    }
}

export default MoviesList;