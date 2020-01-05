 import React, { Component } from 'react'
 import Fuck from './Welcome'
function Greet(props)
{
    props.name="gandu";
    return(<div>
        <h1>Hello {props.name}</h1>
        </div>

    )
}
export default Greet