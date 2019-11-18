import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            astros: []
        }
    }


    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    astros: data.people
                })
            })

    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default App;
