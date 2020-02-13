import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.css';

const LandingPage = () => (
  <section className={styles.Landing}>
    <h1>Welcome to Facey Face!</h1>
    <p>You'll have 5 seconds to make your face the faciest face ever. Prepare yourself. Deep breath. When you're ready, click below to start!</p>
    <Link to='/faceyface'>
      <button>Click to begin!</button>
    </Link>
  </section>
);

export default LandingPage;
