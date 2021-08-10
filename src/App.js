import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={LandingPage} />
      <Footer />
    </div>
  );
}

export default App;
