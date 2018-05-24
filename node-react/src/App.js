import React, { Component } from 'react';
import './App.css';
import {Routes, Switch, Link} from 'react-router-dom';
import axios from 'axios';


class App extends Component {
  constructor(){
    super();

    this.state= {
      products: []
    }
  }

componentDidMount() {
  axios.get('/api/products').then(res => {
    console.log(res.data)
    this.setState({
      products: res.data
    })
  })
}

  render() {
    let {products} = this.state;
    console.log(products)
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
