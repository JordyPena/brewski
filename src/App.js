import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import Home from './Home/Home';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Footer />
    </div>
  );
}

export default App;
