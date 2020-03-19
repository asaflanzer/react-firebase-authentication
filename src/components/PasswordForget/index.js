import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const PasswordForgetPage = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);
const INITIAL_STATE = {
  email: '',
  error: null,
};
class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, error } = this.state;
    const isInvalid = email === '';
    return (
      <form onSubmit={this.onSubmit}>
        <div className="container hero-unit">
            <label>Forgot Password</label>
            <InputGroup className="mb-3">
              <FormControl
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                placeholder="Email Address"
                aria-label="Email Address"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button type="submit" variant="outline-secondary" disabled={isInvalid}>Reset My Password</Button>
                {error && <p>{error.message}</p>}
              </InputGroup.Append>
            </InputGroup>
        </div>
      </form>
    );
  }
}
const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);
export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export { PasswordForgetForm, PasswordForgetLink };