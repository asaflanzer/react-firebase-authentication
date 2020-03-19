import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import { Navbar, Nav, Form, FormControl,
Button, NavDropdown, Row, Col } from 'react-bootstrap';
import { withFirebase } from '../Firebase';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  
// componentDidMount() {
//     fetch(url).then(results => {
//         // Do something with the results
//     })
// }

  render() {
    return (
        <AuthUserContext.Consumer>
          {authUser => authUser
            ?
            <Navbar user={authUser.email} firebase={this.props.firebase} collapseOnSelect expand="lg" bg="light" variant="light">
              <Navbar.Brand href={ROUTES.LANDING}>Dev Dashboard</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>
                  <Nav.Link href={ROUTES.HOME}>Home</Nav.Link>
                  <NavDropdown title={authUser.email} id="basic-nav-dropdown">
                    <NavDropdown.Item href={ROUTES.ACCOUNT}>Settings</NavDropdown.Item>
                    <NavDropdown.Item href={ROUTES.ADMIN}>Admin</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <SignOutButton />
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              <Form inline>
                <Row>
                  <Col xs={8}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  </Col>
                  <Col xs={4}>
                    <Button variant="outline-primary" className="">Search</Button>
                  </Col>
                </Row>
              </Form>
            </Navbar>
            :
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
              <Navbar.Brand href={ROUTES.LANDING}>Dev Dashboard</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>
                  <Nav.Link href={ROUTES.SIGN_IN}>Sign In</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Form inline>
                <Row>
                  <Col xs={8}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  </Col>
                  <Col xs={4}>
                    <Button variant="outline-primary" className="">Search</Button>
                  </Col>
                </Row>
              </Form>
            </Navbar>
          }
        </AuthUserContext.Consumer>
    )
  }
}

export default withFirebase(Navigation);