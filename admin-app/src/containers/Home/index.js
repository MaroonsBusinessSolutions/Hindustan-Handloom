import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import  Layout  from '../../components/Layout'; 
import './style.css';

/**
* @author
* @function Home
**/
const Home = (props) => {

 return(

  <Layout>
<Container fluid>
  <Row>
    <Col md={2} className="sidebar">Side bar</Col>
    <Col md={10} style={ {marginLeft:'auto'} }>container</Col>
  </Row>
</Container>



      {/* <Jumbotron style={{margin: '5rem', background: '#ffff' }} className="text-center">
        <h1>
            Welcome to Admin Dashboard
        </h1>
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>

      </Jumbotron> */}
  </Layout>

  )
}

export default Home