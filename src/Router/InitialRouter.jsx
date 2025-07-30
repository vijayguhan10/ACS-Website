import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HomeRender from "../components/HomeRender";
import Contact from "../components/Contact";
import Careers from "../components/Careers";
import ViewProductIndex from "../components/viewproducts/ViewProductIndex";
const InitialRouter = () => (
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<HomeRender />} />
      <Route path="/viewproducts" element={<ViewProductIndex />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
    <Footer />
  </Router>
);

export default InitialRouter;