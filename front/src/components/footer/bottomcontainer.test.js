import React from 'react';
import ReactDOM from 'react-dom';
import BottomContainer from './bottomcontainer';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BottomContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
  const wrapper = shallow(<BottomContainer />);
  expect(wrapper.find('div').length).toEqual(1);
});
