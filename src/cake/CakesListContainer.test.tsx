import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, AnyAction } from 'redux';
import { IStoreState, ICake } from '../types';
import { mockCakesState } from '../mocks/cakes';
import CakesListContainer from './CakesListContainer';
import CakesList from './CakesList';
import reducer from '../reducers/reducer';

jest.mock('./CakesList', () => {
    const MockCakeList = () => <div />;

    return MockCakeList;
});

const setup = (newProps?: Partial<{}>) => {
    const props = {
        ...newProps
    };

    const store = createStore<IStoreState, AnyAction, {}, {}>(reducer, {
        cake: {
            cakes: mockCakesState
        }
    });

    store.dispatch = jest.fn();

    const wrapper = mount(
        <Provider store={store}>
            <CakesListContainer {...props} />
        </Provider>
    );

    return {
        wrapper,
        props,
        store
    }
};

describe('CakesListContainer', () => {
    it('should mapStateToProps correctly', () => {
        const { wrapper, store } = setup();
        const cakesList = wrapper.find(CakesList);
        const expectedCakes = Array.from(store.getState().cake.cakes.values())

        expect(cakesList.props().cakes).toEqual(expectedCakes);
    });
});