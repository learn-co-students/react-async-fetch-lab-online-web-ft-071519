import React from 'react';

class App extends React.Component {


    state =  {
        persons: []
    }
    
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
                persons: resp.people
            })
        
        })
    }


    // //does not work
    renderPersons = () => {
        return this.state.persons.map(person => {
             return <h3 key={person.name}>{person.name}</h3>
        })
    }

    render() {
        return (
            <div>
              {this.renderPersons()}   
              {/* {this.state.persons.map(person => {
            return <h3 key={person.name}>{person.name}</h3>
        })} */}
            </div>

        )
    }
}

export default App
