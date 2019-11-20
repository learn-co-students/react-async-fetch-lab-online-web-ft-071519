import React from 'react';

export default class App extends React.Component {
  constructor() {
      super()
      this.state = {}
  }

  componentDidMount() {
      fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(object => console.log(object));
  }


  render() {
    return <p> Hi </p>
  }
}