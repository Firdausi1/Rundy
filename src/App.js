import React from 'react';
import Nav from './Nav/nav'
import './App.css';
import Header from './Header/header';
import Uses from './Occasions/occasions';
import Flowers from './Flowers/flowers';
import Special from './Special/special';
import Footer from './Footer/footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Uses/>
      <Flowers/>
      <Special/>
      <Footer/>
    </div>
  );
}

export default App;
