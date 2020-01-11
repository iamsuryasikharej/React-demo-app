import React, { Component } from 'react'
import RenderList from './RenderList'
export class TestList extends Component {
    render() {
        const list=['surya','ram','shyam','jodhu']
        return (
            <div>
                <ul>{list}</ul> 
            </div>
        )
    }
}

export default TestList
