import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import App from './components/App';
import Project from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from './components/Footer';
import Error from './components/Error';
import Sitemap from './components/Sitemap';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const container = ReactDOM.createRoot(document.getElementById('container'));
container.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <main id="root">
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/project" exact element={<Project />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
