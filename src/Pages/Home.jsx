import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';


const services = [
  { title: 'Service 1', description: 'Description for service 1' },
  { title: 'Service 2', description: 'Description for service 2' },
  { title: 'Service 3', description: 'Description for service 3' },
];
const Home = () => {
  return (
    <Container>
      <Row>
        {services.map((service, index) => (
          <Col key={index} xs={3} md={3} lg={3}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;