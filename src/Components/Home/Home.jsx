import React from "react";
import "./Home.css";
import Footer from '../Footer/Footer';
import Carousel from "./Carousel";
import Product from '../Pages/ProductCard';

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="Services">
      <div className="vertical_line"><i className="uil uil-truck"></i><h4>Smooth Delivery</h4></div>
      <div className="vertical_line"><i className="uil uil-headphones-alt"></i><h4>24/7 Support</h4></div>
      <div className="vertical_line"><i className="uil uil-clock"></i><h4>Return Policy</h4></div>
      <div><i className="uil uil-shield-check"></i><h4>Secure Payment</h4></div>
    </div>
      <Product />
      <Footer />
    </>
  );
};

export default Home;
