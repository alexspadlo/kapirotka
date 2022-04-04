import React from 'react';
import { shallow } from 'enzyme';
import AboutMe from './AboutMe';

describe('Testing render of AboutMe component', () => {
   it('renders without crashing', () => {
      shallow(<AboutMe />);
    });
});