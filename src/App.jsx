import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './card.css'
export default function App() {
let disrticts=[
  {
      "id" : 1,
      "title" : "ALAPPUZHA",
      "description" : "smallest district of Kerala",
      "image" : "./images/alappuzha.jpeg"
  },
  {
      "id" : 2,
      "title" : "ERNAKULAM",
      "description" : "A bustling urban district",
      "image" : "./images/ernakulam.jpg"
  },
  {
      "id" : 3,
      "title" : "IDUKKI",
      "description" : "captivating hill stations",
      "image" : "./images/idukki.jpeg"
  },
  {
      "id" : 4,
      "title" : "PALAKKAD",
      "description" : "renowned for its ancient forts",
      "image" : "./images/pkd.jpeg"
  },
  {
      "id" : 5,
      "title" : "KOZHIKODE",
      "description" : "famous for its Malabar cuisine",
      "image" : "./images/kkd.jpeg"
  },
  {
      "id" : 6,
      "title" : "THRISSUR",
      "description" : "A cultural hub",
      "image" : "./images/thrissur.jpeg"
  },
  {
      "id" : 7,
      "title" : "WAYANAD",
      "description" : "breathtaking landscapes",
      "image" : "./images/waynad.jpeg"
  },
  {
      "id" : 8,
      "title" : "THIRUVANATHAPURAM",
      "description" : "capital city",
      "image" : "./images/tvm.jpeg"
  },
  {
      "id" : 9,
      "title" : "KOTTAYAM",
      "description" : "land of lakes and latex",
      "image" : './images/kott.jpeg'
  },
  {
    "id" : 10,
    "title" : "PATHANAMTITTA",
    "description" : "land of lakes and latex",
    "image" : './images/kott.jpeg'

  },
  {
      "id" : 11,
      "title" : "KANNUR",
      "description" : "land of lakes and latex",
      "image" : './images/kott.jpeg'
  },
  {
      "id" : 12,
      "title" : "KOLLAM",
      "description" : "land of lakes and latex",
      "image" : './images/kott.jpeg'
  },
  {
      "id" : 13,
      "title" : "KASARGOD",
      "description" : "land of lakes and latex",
      "image" : './images/kott.jpeg'
  },
  {
      "id" : 14,
      "title" : "MALAPPURAM",
      "description" : "land of lakes and latex",
      "image" : './images/kott.jpeg'
  }
]

  return (
    <div>
      <Container>
      <h1 className='d-flex justify-content-center mt-3'>KERALA DISTRICTS</h1>

      <Row>
  {disrticts.map((district, index) => (
    <Col sm = {4}  key={index} className="card-pad mt-4">
      <Card className='card-pad'>
        <Card.Img variant="top" src={district.image} style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title className='he1'>{district.title}</Card.Title>
          <Card.Text style={{height :'20 rem'}}>
            {district.description}
            </Card.Text>
          <Button variant="primary">Visit</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
      </Container>

    </div>
  )
}

