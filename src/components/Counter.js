import React, { Component } from 'react'

export class Counter extends Component {
    constructor()
    {
        super()
        this.state={
            counter:0
        }
    }
    render() {
        return (
            <div>
                <h1>clicked {this.state.counter} times</h1>
                <button onClick={this.fun.bind(this)}>Click me</button>
            </div>
        )
    }
    fun()
    {
        console.log("fun");
        
        this.setState(this.updaterf,this.cb)
    }
    updaterf(prevState,props){
        console.log("ll");
        
        return{counter:prevState.counter+1+props.name}
    }
    cb()//This function will execute after 
    {
        console.log(this.state);
        
    }
}

export default Counter
