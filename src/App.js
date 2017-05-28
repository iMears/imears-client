import axios from 'axios';
import logo  from './logo.svg';

import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    const options = {
      baseURL: process.env['REACT_APP_API_URL'],
      headers: {'Authorization': process.env['REACT_APP_CLIENT_ID'] },
    };

    axios.get('/users', options)
      .then((res) => this.setState({ users: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="users">
          { this.state.users.map((user) => <div key={user.id}>email: {user.email}</div>) }
        </div>
      </div>
    );
  }
}

export default App;
