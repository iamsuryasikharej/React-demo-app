import React, { Component } from 'react'

export class Clickme extends Component {
    constructor()
    {
        super()
        this.state={
            message:'visitor'
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleme}>Click</button>
            </div>
        )
    }
    handleme=()=>
    {
        this.setState({
            message:"ssr"
        })
    }
}

export default Clickme
