import React, { Component } from 'react'

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.tasks.map((task, i) => {
                    return (
                        <li key={i}>{task}</li>
                    )
                })}
            </ul>
        )
    }
}