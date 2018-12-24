import React from 'react';
import { Link } from 'react-router-dom';

import AuthHelper from './AuthHelper';


class Login extends React.Component {

  Auth = new AuthHelper();

  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      formSubmitted: false,
      formValid: false,
      message: null,
      password: '',
    };

    this.loginUser = this.loginUser.bind(this);
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) this.props.history.replace('/dashboard');
  }

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => this._validateForm())
  };

  _validateForm = () => {
    const { email, password } = this.state;
    const formValid = email !== '' && password !== '';
    this.setState({ formValid });
  };

  loginUser(e) {
    e.preventDefault();
    this.setState({ formSubmitted: true, message: null });
    const {
      email,
      password,
    } = this.state;

    this.Auth.login(email, password)
      .then(res => {
        // console.log(res);
        if (res.result === 'success') return this.props.history.replace('/dashboard');
        this.setState({ formSubmitted: false, message: res.message });
      })
      .catch(err => console.log(err));
  };

  render() {
    const {
      email,
      formSubmitted,
      formValid,
      password,
      message,
    } = this.state;

    return (
      <div className="signin-wrapper">

        <div className="signin-box">
          <h2 className="slim-logo"><a href="/">Conceal</a></h2>
          <h2 className="signin-title-primary">Welcome back!</h2>
          <h3 className="signin-title-secondary">Sign in to continue.</h3>

          <form onSubmit={this.loginUser}>
            <div className="form-group">
              <input
                placeholder="Enter your email"
                type="email"
                name="email"
                className="form-control"
                value={email}
                minLength={4}
                onChange={this._handleChange}
              />
            </div>

            <div className="form-group mg-b-50">
              <input
                placeholder="Enter your password"
                type="password"
                name="password"
                className="form-control"
                value={password}
                minLength={8}
                onChange={this._handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={formSubmitted || !formValid}
              className="btn btn-primary btn-block btn-signin"
            >
              {formSubmitted ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {message &&
            <div className="error-message">{message}</div>
          }

          <p className="mg-b-0">Don't have an account? <Link to="/signup">Sign Up</Link></p>
          <p className="mg-b-0">Forgot your password? <Link to="/reset_password">Reset It</Link></p>
        </div>
        ​
      </div>
    );
  }
}

export default Login;
