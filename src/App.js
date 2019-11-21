import React from 'react';

class App extends React.Component {


    state =  {
        fetchData: []
    }
    
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
                fetchData: resp.people

            })
        })

    }

    render() {
        return (
            <div>
            
            </div>

        )
    }
}

export default App
