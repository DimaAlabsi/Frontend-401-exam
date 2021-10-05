import React, { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Col, Container, Row, Button } from "react-bootstrap";
import UpdateFav from "./UpdateFav";
class Favourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      favswitchs: [],
      toUSD: "",
      image_url: "",
      title: "",
      showUpdate: false,
    };
  }
  componentDidMount = () => {
    axios.get(`${process.env.REACt_APP_BACKEND_URL}/getFav`).then((res) => {
      this.setState({
        favswitchs: res.data,
      });
    });
  };
  handleDelete = async (id) => {
    let config = {
      method: "DELETE",
      baseURL: process.env.REACt_APP_BACKEND_URL,
      url: `/deleteFlowers/${id}`,
    };
    await axios(config).then((res) => {
      this.setState({
        favswitchs: res.data,
      });
    });
  };
  handleUpdate = (title, description, toUSD, image_url, id) => {
    this.setState({
      showUpdate: true,
      title: title,
      description: description,
      toUSD: toUSD,
      image_url: image_url,
      id: id,
    });
  };
  handleUpdateForm = async (e) => {
    e.preventDefault();
    let config = {
      method: "PUT",
      baseURL: process.env.REACt_APP_BACKEND_URL,
      url: `/updateFlowers/${this.state.id}`,
      data: {
        title: e.target.title.value,
        description: e.target.description.value,
        toUSD:e.target.toUSD.value,
        image_url: e.target.image_url.value,
      },
    };
    await axios(config).then((res)=>{
        this.setState({
            favswitchs:res.data,
            showUpdate:false

        })
    })
    
  };
  render() {
    return <div>
<h1>Fav Switchs</h1>
<Container>
  <Row>
    <Col>
    {this.state.favswitchs.map((i)=>{
        return( 
             <Card style={{ width: '18rem' }}>
        <Card.Img variant="top"src={i.image_url} />
        <Card.Body>
          <Card.Title>{i.title}</Card.Title>
          <Card.Text>
           
            <p>{i.description}</p>
            <h5>{i.toUSD}</h5>

          </Card.Text>
          <Button variant="primary" onClick={()=> this.handleDelete(i._id)}>Delete</Button>
          <Button variant="primary" onClick={()=> this.handleUpdate(i._id,i.title,i.image_url,i.description,i.toUSD)}>Update</Button>

        </Card.Body>
      </Card>
      )  })}
      </Col>
        </Row>
      </Container>)
<UpdateFav
showUpdate={this.state.showUpdate}
title={this.state.title}
description={this.state.description}
image_url={this.state.image_url}
toUSD={this.state.toUSD}
handleUpdateForm={this.handleUpdateForm}




/>
    </div>;
  }
}

export default Favourite;
