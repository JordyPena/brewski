import '../LandingPage/LandingPage.css';
import { useHistory } from 'react-router-dom';
const LandingPage = () => {

  const history = useHistory();

  //navigate user to home page
  const enterSite = () => {
    history.push('/home')
  }
  return (
    <main className='home-container'>
      <section className='home-background-img'>
        <h1 className='sasquatch-header'>Sasquatch</h1>
        <h2 className='beer-me-header'>Beer Me</h2>
        <section className='home-card'>
          <h3 className='home-card-header'>Find your path</h3>
          <button className='home-card-button' onClick={() => enterSite()}>Grrrrr</button>
        </section>
      </section>
    </main>
  )
}
export default LandingPage;