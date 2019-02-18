import * as React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import * as Adapter from 'enzyme-adapter-react-16';
import NavigationBar from '../components/nav-bar/NavBar';

configure({ adapter: new Adapter() });
describe('Navigation Bar component testing', () => {
  it('should render Navigation bar', () => {
    const wrapper = shallow(<NavigationBar />); 
    const links = wrapper.find('.nav-link');
    expect(links).to.have.lengthOf(2); 
  });
}); 
