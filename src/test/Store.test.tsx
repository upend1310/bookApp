import * as React from 'react';
import { configure, render } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as Adapter from 'enzyme-adapter-react-16';
import { Book } from '../model/Book';
import { BookList } from '../../src/components/book-list/BookList';
import * as sinon from 'sinon';

configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const INITIAL_STATE: Book[] = [];

const FINAL_STATE: Book[] = [
    {
        id: 1,
        description: "Test Book"
    }
];

const mockOnAddBookfn = sinon.fake();

describe('Store testing with initial state as blank', () => {
    let store:any;
    beforeEach(() => {
        store = mockStore(INITIAL_STATE);
    })
    it("should show book list component with no books", () => {
        const root = render(
            <Provider store={store}>
                <BookList books={INITIAL_STATE} onFetchAllBooks={mockOnAddBookfn} />
            </Provider>
        );
        const count = INITIAL_STATE.length;
        expect(root.find('.book-card')).to.have.length(count);
    });
});

describe('Store testing with initial state with a entry', () => {
    let store:any;
    beforeEach(() => {
        store = mockStore(FINAL_STATE);
    })
    it("should show book list component with one books", () => {

        const root = render(
            <Provider store={store}>
                <BookList books={FINAL_STATE} onFetchAllBooks={mockOnAddBookfn} />
            </Provider>
        );
        const count = FINAL_STATE.length;
        expect(root.find('.book-card')).to.have.length(count);
    });
});
