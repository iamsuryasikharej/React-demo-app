import React, { Component } from 'react'

export class Child extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.fun}>Click Me</button>
            </div>
        )
    }
}

export default Child
