import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import { shallow } from 'enzyme';
import SiteLogo from '../sitelogo';
import SiteCart from '../sitecart';
import SiteContacts from '../sitecontacts';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});
const wrapper = shallow(<Header />);
it('should render the SiteLogo Component', () => {
  expect(wrapper.containsMatchingElement(<SiteLogo />)).toEqual(true);
});
it('should render the SiteContacts Component', () => {
  expect(wrapper.containsMatchingElement(<SiteContacts />)).toEqual(true);
});
it('should render the SiteCart Component', () => {
  expect(wrapper.containsMatchingElement(<SiteCart />)).toEqual(true);
});
