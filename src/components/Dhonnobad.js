import React,{Component} from 'react'
class Dhonnobad extends Component
{
    constructor() {
        super()
        this.state = {
            message: 'visitor'
        }
    }
    render()
    {
        
        return (
            <div>
            <h1>Welcome {this.state.message}</h1>
            <button onClick={()=>this.fun()}></button>
            </div>
        )
    }
    fun()
    {
        this.setState(
            {
                message:'bro'
            }
        )
    }
}
export default Dhonnobad