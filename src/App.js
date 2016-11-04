import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/container';
import Counter from './components/Counter/container';
import Poster from './components/Poster/container';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
            <h1 className="title">Hello, App 2</h1>
            <Counter />
            <hr/>
            <Poster />
        </div>
      </div>
    );
  }
}
