import React from 'react';
import { shallow } from 'enzyme';
import MyWorks from './MyWorks';

describe('Testing render of MyWorks component', () => {
   it('renders without crashing', () => {
      shallow(<MyWorks />);
    });
});