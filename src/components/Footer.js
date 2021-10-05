import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";


export class Footer extends Component {
    render() {
        return (
            <div>
                  <Navbar bg="light" expand="lg">
  
  <Navbar.Brand >&copy; 
       Watchs</Navbar.Brand>
  </Navbar>
            </div>
        )
    }
}

export default Footer
