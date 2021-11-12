import React from 'react';
import NavBar from '../../../Shared/Navbar/NavBar';
import Footer from '../../../Shared/Footer/Footer';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Products></Products>
      <Contact></Contact>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
