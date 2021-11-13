import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound.png';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 page not found';
  }, []);
  return (
    <div className='d-flex justify-content-center align-items-center my-3'>
      <div>
        <div>
          <img className=" img-fluid" src={notFound} alt="" />
        </div>
        <div className='d-flex justify-content-center align-items-center my-2'>
          <Link to="/home" className="btn btn-dark">
            GO Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
