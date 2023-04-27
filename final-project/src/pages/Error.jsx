import { Link } from 'react-router-dom';
import '../assets/styles/errorPage.css'

const Error = () => {
  return (
    <section className='error-container'>
      <h2>404 Error!</h2>
      <p>Page not found.</p>
      <Link to="/">
        <button className='error-home-btn'>Return Home</button>
      </Link>
    </section>
  );
};
export default Error;
