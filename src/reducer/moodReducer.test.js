import { drinkCoffee } from '../actions/moodActions';
import reducer from './moodReducer';

describe('mood reducer', () => {
  it('handles a drinkCoffee action', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ coffees: 1 });
  });
});