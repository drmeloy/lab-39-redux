import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { useDispatch, useSelector } from 'react-redux';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions';
import { getSnacks, getNaps, getCoffees, getStudies } from '../selectors/moodSelectors';

const MoodsFn = () => {
  const dispatch = useDispatch();
  const coffees = useSelector(getCoffees);
  const snacks = useSelector(getSnacks);
  const naps = useSelector(getNaps);
  const studies = useSelector(getStudies);

  return (
    <>
      <Controls />
        <button onClick={() => dispatch(drinkCoffee())}>coffee - {coffees}</button>
        <button onClick={() => dispatch(eatSnack())}>snacks - {snacks}</button>
        <button onClick={() => dispatch(takeNap())}>naps - {naps}</button>
        <button onClick={() => dispatch(study())}>studies - {studies}</button>
      <Face />
    </>
  );
}

export default MoodsFn;
