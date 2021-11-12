import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../../images/contact.jpg'
import fb from '../../../../images/icon/facebook.png'
import inst from '../../../../images/icon/instagram.png'
import yt from '../../../../images/icon/youtube.png'

const Contact = () => {
    return (
        <div style={{ backgroundColor: '#F6F6F6',padding: '40px 0' }}>
            <Container>
                <Row className="g-2">
                <Col md={7}>
                        <img className=" rounded-2" style={{height:'560px',width: '100%'}} src={img} alt="" />
                    </Col>
                    <Col className="d-flex  align-items-center" md={5}>
                        <div>
                            <h2>LET’S KEEP IN TOUCH</h2>
                            <p>We’re very active on our social media platforms. Like and follow to stay updated with us</p>
                            <div className="d-flex">
                                <img style={{width: '40px',marginRight: '5px'}} src={fb} alt=""/>
                                <img style={{width: '40px',marginRight: '5px'}} src={inst} alt=""/>
                                <img style={{width: '40px',marginRight: '5px'}} src={yt} alt=""/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;