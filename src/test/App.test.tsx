import * as React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import * as Adapter from 'enzyme-adapter-react-16';
import App from '../components/app/App';
import NavigationBar from '../components/nav-bar/NavBar';

configure({ adapter: new Adapter() });
describe('App component testing', () => {
  it('should render Navigation bar', () => {
    const wrapper = shallow(<App />); 
    const navBar = <NavigationBar />;
    expect(wrapper.contains(navBar)).to.equal(true); 
  });
}); 
