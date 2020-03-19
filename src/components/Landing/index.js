import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Landing = () => (
  <Jumbotron>
    <h1>Landing</h1>
    <p>Some text here...</p>
    <p>
      <a className="btn btn-primary btn-large">
        Learn more
      </a>
    </p>
  </Jumbotron>
);

export default Landing;