import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';

describe('LandingPage component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
