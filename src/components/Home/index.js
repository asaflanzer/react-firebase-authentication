import React from 'react';
import { withAuthorization } from '../Session';
import { Jumbotron } from 'react-bootstrap';

const HomePage = () => (
  <Jumbotron>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </Jumbotron>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);