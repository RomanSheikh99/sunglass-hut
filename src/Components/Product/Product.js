import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Place = ({ product, index, handleBooking }) => {
  const { _id, name, img, description, price } = product;

  return (
    <Col md={4} sm={6}>
    <Card className='places-img'>
        <Card.Img
            
            variant="top"
            style={{ maxHeight: '160px' }}
            src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {description.slice(0, 100)}...
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
            <h4>${price}</h4>
                <Link
                    to={`/orderDetails/${_id}`}
                    className="text-decoration-none btn btn-outline-dark d-flex align-items-center">
                    Purchase
                </Link>
            </div>
        </Card.Body>
    </Card>
</Col>
  );
};

export default Place;
