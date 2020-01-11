import React, { Component } from 'react'

export class Formh extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:''
        }
    }
    
    render() {
        return (
            <div>
                <form>
                    <label> Username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUserName.bind(this)}></input>
                </form>
            </div>
        )
    }
    handleUserName(event)
    {
        this.setState({username:event.target.value})
        console.log(this.state.username);
        
    }
}

export default Formh
