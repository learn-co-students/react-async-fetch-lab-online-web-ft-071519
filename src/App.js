// create your App component here
import React, { Component } from 'react';



//no need to modify anything in this component
export default class App extends Component {

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }

    render() {
        return (
            <div></div>
        )
    }
}
