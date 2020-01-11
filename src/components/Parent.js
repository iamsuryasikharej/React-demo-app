import React, { Component } from 'react'
import Child from './Child'
export class Parent extends Component {
    constructor()
    {
        super()
        this.state={
            msg:'parent component'
        }
        this.met=this.met.bind(this)
    }
    render() {
        return (
            <div>
            <h1>{this.state.msg}</h1>
                <Child fun={this.met}></Child>
            </div>
        )
    }
    met()
    {
        this.setState({msg:'changed from child component'})
    }
}

export default Parent
