import * as React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import * as sinon from 'sinon';
import * as Adapter from 'enzyme-adapter-react-16';
import { BookForm } from '../components/book-form/BookForm';

configure({ adapter: new Adapter() });
describe('Book Form component testing', () => {
    let wrapper: any;
    const mockOnAddBookfn = sinon.fake();
    beforeEach(() => {
        wrapper = shallow(<BookForm onAddBook={mockOnAddBookfn}/>)
    });
    it('should render form', () => {
        const bookForm = wrapper.find('form');
        expect(bookForm).to.have.lengthOf(1); 
    });
    it('should have default state of form as blank', () => {
        const bookFormState = wrapper.state();
        expect(bookFormState.currentBook).to.equal("");
        expect(bookFormState.error).to.equal(false);
        expect(bookFormState.isBookAdded).to.equal(false);
    });
    it('should display error badge when input is blank and form is submitted', () => {
        const bookForm = wrapper.find('form');
        bookForm.simulate('submit', {preventDefault: sinon.fake()});
        const bookFormState = wrapper.state();
        expect(bookFormState.error).to.equal(true);
        const badge = wrapper.find('.badge');
        expect(badge).to.have.lengthOf(1);
    });
    it('should display success message when input is filled and form is submitted', () => {
        const bookForm = wrapper.find('form');
        const bookInput = bookForm.find(".form-control");
        bookInput.simulate('change', { target: { value: 'Test Book Name' } })
        wrapper.setState({ currentBook : 'Test Book Name' })
        bookForm.simulate('submit', {preventDefault: sinon.fake()}); 
        const bookFormState = wrapper.state();
        expect(bookFormState.error).to.equal(false);
        expect(bookFormState.isBookAdded).to.equal(true);
        const successMsg = wrapper.find('#successMsg');
        expect(successMsg).to.have.lengthOf(1); 
    });
}); 