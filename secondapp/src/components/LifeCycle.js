//Get Initial state.
//Set State
//Before component mount
//render
// after component mounted
// before component loose the scope
import React, {Component} from 'react';


class LifeCycle extends Component {
    //1.Get Default state.
    constructor(props){
        super(props);

        //2.Set Initial State
        this.state={
            title:'Lodaing lifecycle',
            score: 1
        }
    }

    //3. Before component mount
    componentWillMount(){
        console.log('Before created');
       
    }

    //4. Render
    render(){
        console.log("render jsx")
        return(
            <div>
                <h3>{this.state.title}</h3>
                <div onClick= {()=>this.setState({score:3})}>
                            Click to change Score
                </div>
                <div onClick= {()=>this.setState({title:'New Lifecycle'})}>
                            Click to change Title
                </div>
                <h2>Score: {this.state.score}</h2>
            </div>
        )
    }

    componentWillUpdate(){
        console.log("Before Update")
        // this.setState({title: ''})
    }

    componentDidUpdate(){
        console.log(" After Update")
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextState.score === this.state.score){
            return false
        }
        return true

    }

    //5. After component mounted
    componentDidMount(){
        console.log("After Component Created")
        document.querySelector('h3').style.color= 'red';
    }

    //6. Component Will Unmount
    /*componentWillUnmount(){
        alert("leaving the page")
    }*/

}

export default LifeCycle;


function add(){
    var a =10
    var b =20
}

add()