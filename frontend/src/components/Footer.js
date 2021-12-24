import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={12} className='text-center'>Copyright &copy; Arslan's Shop</Col>
          <Col className='text-center py-2'>Designed and Developed By Arslan Arjumand</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
