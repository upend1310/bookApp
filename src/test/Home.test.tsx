import * as React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import * as Adapter from 'enzyme-adapter-react-16';
import Home from '../components/home/Home';
import BookForm from '../components/book-form/BookForm';

configure({ adapter: new Adapter() });
describe('Home component testing', () => {
    const wrapper = shallow(<Home />);
    it('should render heading', () => {
        const heading = wrapper.find('h1');
        expect(heading.text()).equal('Book List'); 
    });
    it('should render BookForm', () => {
        const bookForm = <BookForm />;
        expect(wrapper.contains(bookForm)).to.equal(true); 
    });
}); 