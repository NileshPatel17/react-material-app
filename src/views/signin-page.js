import React, { Component } from 'react';
import SignIn from '../components/signin';

export default class SignInPage extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}
