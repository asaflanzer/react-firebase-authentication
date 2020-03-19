import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};
class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { passwordOne } = this.state;
    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';
    return (
      <form onSubmit={this.onSubmit}>
        <div className="container hero-unit">
            <label>Change Password</label>
            <InputGroup className="mb-3">
              <FormControl
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                placeholder="New Password"
                aria-label="New Password"
                aria-describedby="basic-addon2"
              />
              <FormControl
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                placeholder="Confirm New Password"
                aria-label="Confirm New Password"
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
export default withFirebase(PasswordChangeForm);