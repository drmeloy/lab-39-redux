import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';
import { Provider } from 'react-redux';
import store from '../../store';

describe('LandingPage component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><LandingPage /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
