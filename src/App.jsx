import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Pages/Layout/Layout";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";

const App = () => {
  return (
    <div className="app">
    <Routes >
      <Route path="/" element={<Layout />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      
    </Routes>
    </div>
  );
};

export default App;
