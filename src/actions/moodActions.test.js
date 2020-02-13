import { DRINK_COFFEE, drinkCoffee, EAT_SNACK, eatSnack } from './moodActions';

describe('mood actions', () => {
  it('can create a DRINK_COFFEE action', () => {
    const action = drinkCoffee();
    expect(action).toEqual({ type: DRINK_COFFEE });
  });

  it('can create a EAT_SNACK action', () => {
    const action = eatSnack();
    expect(action).toEqual({ type: EAT_SNACK });
  });
});
