import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';
import { Navbar } from 'react-bootstrap';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

 class Header extends Component {
    render() {
        
        const { isAuthenticated } = this.props.auth0;

        return (
            <div>
               <Navbar bg="light" expand="lg">
  
    <Navbar.Brand >watches-list</Navbar.Brand>
    <Link to= "/">Home</Link>
    <Link to= "/favWatches">Fav watches</Link>
    {isAuthenticated ? <LogoutButton/>: <LoginButton/>}
    </Navbar>
            </div>
        )
    }
}

export default withAuth0( Header)


