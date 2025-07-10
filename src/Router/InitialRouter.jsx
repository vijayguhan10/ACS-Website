import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeRender from "../components/HomeRender";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const InitialRouter = () => (
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<HomeRender />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
);

export default InitialRouter;
