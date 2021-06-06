import React, { Component } from "react";

class LifeCycleDemo extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {};
  }

  static getDerivedStateFromProps(state, props) {
    console.log("getderivedstatefromprops");
    return state;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render method");
    return <div>Hi, Welcome to lifecycle demo</div>;
  }
}

export default LifeCycleDemo;
