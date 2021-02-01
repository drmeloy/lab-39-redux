import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.css';
import { useDispatch } from 'react-redux';
import { clearAll } from '../../actions/moodActions';

const LandingPage = () => {
  const dispatch = useDispatch();

  return (
    <section className={styles.Landing}>
      <h1>Welcome to Facey Face!</h1>
      <p>You'll have 5 seconds to make your face the faciest face ever. Prepare yourself. Deep breath. When you're ready, click below to start!</p>
      <Link to='/faceyface'>
        <button onClick={dispatch(clearAll())}>Click to begin!</button>
      </Link>
    </section>
  );
}

export default LandingPage;
