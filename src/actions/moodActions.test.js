import { DRINK_COFFEE, drinkCoffee } from './moodActions';

describe('mood actions', () => {
  it('can create a DRINK_COFFEE action', () => {
    const action = drinkCoffee();
    expect(action).toEqual({
      type: DRINK_COFFEE
    });
  });

  it('can create a ')
});
