import '../LandingPage/LandingPage.css';
import { useHistory } from 'react-router-dom';
const LandingPage = () => {

  const history = useHistory();

  //navigate user to home page
  const enterSite = () => {
    history.push('/home')
  }
  return (
    <main className='landingPage-container'>
      <section className='landingPage-background-img'>
        <h1 className='sasquatch-header'>Sasquatch</h1>
        <h2 className='beer-me-header'>Beer Me</h2>
        <section className='landingPage-card'>
          <h3 className='landingPage-card-header'>Find your path</h3>
          <button className='landingPage-card-button' onClick={() => enterSite()}>Grrrrr</button>
        </section>
      </section>
    </main>
  )
}
export default LandingPage;