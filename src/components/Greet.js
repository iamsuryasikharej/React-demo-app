 import React, { Component } from 'react'
 import Fuck from './Welcome'
function Greet(props)
{
    const { name,snm}=props
    return(<div>
        <h1>Hello {name}</h1>
        </div>

    )
}
export default Greet