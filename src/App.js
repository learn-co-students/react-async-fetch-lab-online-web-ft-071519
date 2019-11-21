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
    // renderPersons = () => {
    //     console.log(this.state.persons)
    //     this.state.persons.map(person => {
    //         console.log(person)
    //         console.log(person.name)
    //         return <h3 key={person.name}>{person.name}</h3>
    //     })
    // }

    render() {
        return (
            <div>
              {/* {this.renderPersons()}  <=why this does not work?  */}
              {this.state.persons.map(person => {
            console.log(person)
            console.log(person.name)
            return <h3 key={person.name}>{person.name}</h3>
        })}
            </div>

        )
    }
}

export default App
