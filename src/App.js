import React, { Component } from "react";

export default class App extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(json => {
            this.setState({ people: json.people })
            console.log(this.state.people)
        })
        .catch(error => console.log(error))
    }

    render() {
        // console.log(this.state.people)
        return (
            <p>
            {this.state.people.map(person => person.name) + " "}
            </p>
        )
    }
}