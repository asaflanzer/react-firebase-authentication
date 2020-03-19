import React from 'react';
import { withFirebase } from '../Firebase';
import { NavDropdown } from 'react-bootstrap';

const SignOutButton = ({ firebase }) => (
  <NavDropdown.Item onClick={firebase.doSignOut}>Sign Out</NavDropdown.Item>
);

export default withFirebase(SignOutButton);