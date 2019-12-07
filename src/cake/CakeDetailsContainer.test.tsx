import { mount } from 'enzyme';
import * as React from 'react';
import CakeDetails from './CakeDetails';
import CakeDetailsContainer, { CakeDetailsContainerProps } from './CakeDetailsContainer';
import mockRouteProps from '../mocks/routeProps';
import { Provider } from 'react-redux';
import { createStore, AnyAction } from 'redux';
import { IStoreState, ICake } from '../types';
import reducer from '../reducers/reducer';
import { mockCakesState } from '../mocks/cakes';

jest.mock('./CakeDetails', () => {
    const MockCakeDetails = () => <div />;

    return MockCakeDetails;
});

const setup = (newProps?: Partial<CakeDetailsContainerProps>) => {
    const props: CakeDetailsContainerProps = {
        ...mockRouteProps,
        match: {
            ...mockRouteProps.match,
            params: {
                id: 'testId'
            }
        },
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
            <CakeDetailsContainer {...props} />
        </Provider>
    );

    return {
        wrapper,
        props,
        store
    }
};

describe('CakeDetailsContainer', () => {
    it('should mapStateToProps correctly', () => {
        const { wrapper, store } = setup();
        const cakeDetails = wrapper.find(CakeDetails);

        expect(cakeDetails.props().cake).toBe(store.getState().cake.cakes.get('testId'));
    });
});