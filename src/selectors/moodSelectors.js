export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};

export const getState = state => state;

export const getCoffees = () => {
  const state = getState();
  return state.coffees;
};

export const getSnacks = () => {
  const state = getState();
  return state.snacks;
};

export const getNaps = () => {
  const state = getState();
  return state.naps;
};

export const getStudies = () => {
  const state = getState();
  return state.studies;
};
