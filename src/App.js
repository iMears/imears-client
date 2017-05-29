import axios from 'axios';
import logo  from './logo.svg';

import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.loadData();
  }

  loadData = () => {
    const options = {
      baseURL: process.env['REACT_APP_API_URL'],
      headers: {'Authorization': process.env['REACT_APP_CLIENT_ID'] },
    };

    axios.get('/users', options)
      .then((res) => this.setState({ users: res.data, loading: false }))
      .catch((err) => console.log(err));
  };

  render() {
    const loading = (<div>Loading...</div>);
    const users = (
      <div className="users">
        { this.state.users.map((user) => <div className="user" key={user.id}>name: {user.name} - email: {user.email}</div>) }
      </div>
    );

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to imears-client!</h2>
        </div>
        <br /><br />
        { this.state.loading ? loading : users }
      </div>
    );
  }
}

export default App;
