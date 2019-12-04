// create your App component here
import React, { Component } from 'react';
export default class App extends Component {
    //  http://api.open-notify.org/astros.json
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
        .then(ppldata => this.setState({data: ppldata}))
    };
    render() {
        {this.data}
    }
}