import React, { Component } from 'react'

export class EventBinding extends Component {
    constructor(props){
        super(props);
        this.state={
            message:"Hello, Welcome to Events"
        }
        //this.clickHandler=this.clickHandler.bind(this);
    }
     /*clickHandler(){
       this.setState({
           message:"Task Ended"
       });
       console.log(this);
    }*/

    clickHandler=()=>{
        this.setState({
            message:"Task Ended"
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>submit</button>
            </div>
        )
    }
}

export default EventBinding
