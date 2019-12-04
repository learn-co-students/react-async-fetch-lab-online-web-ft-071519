// create your App component here
import React from 'react'

export default class App extends React.Component {
    state = { 
        peopleInSpace: []
     }
    render() { 
        return ( 
        <h1>${console.log(this.state.peopleInSpace.map(person => person.name))}</h1>
         )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }
}

 