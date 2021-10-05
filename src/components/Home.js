import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card,Col,Container, Row, Button } from 'react-bootstrap';
 class Home extends Component {
     constructor(props){
         super(props);
         this.state={
             switchs:[],
             favswitchs:[]
         }
     }
     componentDidMount=()=>{
         axios.get(`${process.env.REACt_APP_BACKEND_URL}/getData`).then((res)=>{
             this.setState({
                 switchs:res.data,
             })
         })
     }
     addToFav=(title, description, toUSD, image_url)=>{
         let config={
              method:"POST",
              url:"/postFlower",
              data:{
                title:title,
                description:description,
                toUSD:toUSD,
                image_url:image_url
              }
    };
    axios(config).then((res)=>{
        axios.get(`${process.env.REACt_APP_BACKEND_URL}/getData`).then((res)=>{
            this.setState({
                favswitchs:res.data,
            })
        })
    })
     }
    render() {
        return (
            <>
                <h1>Home Page</h1>
                <Container>
  <Row>
    <Col>
    {this.state.switchs.map((i)=>{
        return( 
             <Card style={{ width: '18rem' }}>
        <Card.Img variant="top"src={i.image_url} />
        <Card.Body>
          <Card.Title>{i.title}</Card.Title>
          <Card.Text>
           
            <p>{i.description}</p>
            <h5>{i.toUSD}</h5>

          </Card.Text>
          <Button variant="primary" onClick={()=> this.addToFav(i.title,i.image_url,i.description,i.toUSD)}>Add to Fav</Button>
        </Card.Body>
      </Card>
      )  })}
      </Col>
        </Row>
      </Container>)
   
              
            </>
        )
    }
}

export default Home
