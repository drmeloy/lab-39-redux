import { drinkCoffee, eatSnack } from '../actions/moodActions';
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
    const initialStaet = { snacks: 0 };
    const newState = reducer(initialStaet, action);
    expect(newState).toEqual({ snacks: 1 });
  })
});