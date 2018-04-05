import React, { Component } from 'react'
import styled from 'styled-components'

const Field = styled.input`
    border-color: red;
    border-radius: 5px;
`

const Container = styled.div`
    padding: 50px;
`

const sss = {
    borderColor: 'red'
}

export default class TodoForm extends Component {

    handleClick = () => {
        this.props.onTaskAdd(this.myInput.value)
        //this.myInput.value = ''
    }

    render() {
        return (
            <Container>
                <Field 
                    ref={ref => this.myInput = ref}
                    type="text" 
                />
                <button style={sss} onClick={this.handleClick}>
                    Add #{this.props.numTasks + 1}
                </button>     
            </Container>
        )
    }
}