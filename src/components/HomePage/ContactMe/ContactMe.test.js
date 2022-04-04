import React from 'react';
import { shallow } from 'enzyme';
import ContactMe from './ContactMe';

describe('Testing render of ContactMe component', () => {
   it('renders without crashing', () => {
      shallow(<ContactMe />);
    });
});