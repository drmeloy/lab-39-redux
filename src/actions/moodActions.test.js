import { DRINK_COFFEE, drinkCoffee, EAT_SNACK, eatSnack, TAKE_NAP, takeNap, STUDY, study } from './moodActions';

describe('mood actions', () => {
  it('can create a DRINK_COFFEE action', () => {
    const action = drinkCoffee();
    expect(action).toEqual({ type: DRINK_COFFEE });
  });

  it('can create a EAT_SNACK action', () => {
    const action = eatSnack();
    expect(action).toEqual({ type: EAT_SNACK });
  });

  it('can create a TAKE_NAP action', () => {
    const action = takeNap();
    expect(action).toEqual({ type: TAKE_NAP });
  });

  it('can create a STUDY action', () => {
    const action = study();
    expect(action).toEqual({ type: STUDY });
  });
});
