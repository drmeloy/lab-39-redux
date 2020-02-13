import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions';
import reducer from './moodReducer';

describe('mood reducer', () => {
  it('handles a drinkCoffee action', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ coffees: 1 });
  });

  it('handles an eatSnack action', () => {
    const action = eatSnack();
    const initialState = { snacks: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ snacks: 1 });
  });

  it('handles a takeNap action', () => {
    const action = takeNap();
    const initialState = { naps: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ naps: 1 });
  });

  it('handles a study action', () => {
    const action = study();
    const initialState = { studies: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ studies: 1 });
  })
});