import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Face from '../components/face/Face';
import { useDispatch, useSelector } from 'react-redux';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions';
import { getSnacks, getNaps, getCoffees, getStudies } from '../selectors/moodSelectors';
import styles from './Controls.css';

const MoodsFn = () => {
  const [time, setTime] = useState(5);

  const dispatch = useDispatch();
  const coffees = useSelector(getCoffees);
  const snacks = useSelector(getSnacks);
  const naps = useSelector(getNaps);
  const studies = useSelector(getStudies);

  useEffect(() => {
    setInterval(() => {
      setTime(time => time - 1);
    }, 1000);
  }, []);

  return (
    <>
      {time > 0 && 
      <main>
        <section className={styles.Controls}>
          <button onClick={() => dispatch(drinkCoffee())}>coffee - {coffees}</button>
          <button onClick={() => dispatch(eatSnack())}>snacks - {snacks}</button>
          <button onClick={() => dispatch(takeNap())}>naps - {naps}</button>
          <button onClick={() => dispatch(study())}>studies - {studies}</button>
        </section>
        <Face />
        <h1 className={styles.Timer}>Time remaining: {time}</h1>
      </main>
      }
      {time <= 0 && 
      <main className={styles.Gameover}>
        <h1>Time's up!</h1>
        <Link to='/'>
          <button>Facey face again?</button>
        </Link>
      </main>
      }
    </>
  );
}

export default MoodsFn;
