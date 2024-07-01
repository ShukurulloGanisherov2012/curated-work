import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="allcontainer">
        <Header  />
        <Home  />
        <Footer  />
      </div>
    </>
  )
}
