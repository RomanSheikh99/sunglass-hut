import React from 'react';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

  useEffect(() => {
    fetch('https://obscure-sierra-48545.herokuapp.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, [isDeleted]);
    
  const handleDelete = id => {
    const handleConfirm = window.confirm('Are you sure to delete');
    if (handleConfirm) {
      fetch(`https://obscure-sierra-48545.herokuapp.com/deleteProduct/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(result => {
          if (result.deletedCount) {
            setIsDeleted(true);
          } else {
            setIsDeleted(false);
          }
        });
    }
  };
    
    return (
        <div>
            <Row className='g-4'>
                {products.map(pd=><Col style={{boxShadow: '0px 0px 2px 0px #999'}} md={6}>
                    <Row className='p-3'>
                        <Col sm={5}>
                            <img className="img-fluid" src={pd.img} alt="" />
                        </Col>
                        <Col sm={7}>
                            <h5>{pd.name}</h5>
                            <h2>${pd.price}</h2>
                            <button
                                onClick={() => {
                                    handleDelete(pd._id);
                                  }}
                                className="btn btn-dark">Delate From Database</button>
                        </Col>
                    </Row>
                </Col>)}
            </Row>
        </div>
    );
};

export default ManageProduct;