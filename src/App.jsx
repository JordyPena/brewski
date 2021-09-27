import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import Home from './Home/Home';
// import BottomImage from './Bottom-img/BottomImage';
function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      {/* <Route exact path='/home' component={BottomImage} /> */}
      <Footer />
    </>
  );
}

export default App;
