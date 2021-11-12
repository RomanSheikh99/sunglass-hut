import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <Col md={4} sm={6}>
            <Card className='places-img'>
                <Card.Img
                    
                    variant="top"
                    style={{ maxHeight: '160px' }}
                    src="https://lunettes.com.bd/wp-content/uploads/2018/12/Buford-Red-Side-original-500x500.jpg" />
                <Card.Body>
                    <Card.Title>BUFORD RED</Card.Title>
                    <Card.Text>
                    If you plan on customizing the Bootstrap Sass files, or don't want to use a CDN for the stylesheet, it may be helpful to install
                        {/* {service.desc.slice(0, 100)}... */}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4>$20</h4>
                        <Link
                            // to={`/placeDetails/${service._id}`}
                            className="text-decoration-none btn btn-outline-dark d-flex align-items-center">
                            Purchase
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;