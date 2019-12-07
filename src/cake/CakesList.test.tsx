import Cake from './Cake';
import mockCakes from '../mocks/cakes';
import { shallow } from 'enzyme';
import * as React from 'react';
import CakesList, { ICakesListProps } from './CakesList';

// needed because enzyme doesnt support useEffect yet
jest.mock('react', () => {
    return {
        ...jest.requireActual('react'),
        useEffect: (fn: () => void) => {
            fn();
        }
    };
})

const setup = (newProps?: Partial<ICakesListProps>) => {
    const props: ICakesListProps = {
        cakes: mockCakes,
        getCakes: jest.fn(),
        deleteCake: jest.fn(),
        ...newProps
    };

    const wrapper = shallow(<CakesList {...props} />);

    return {
        wrapper,
        props
    }
};

describe('CakesList', () => {
    it('should render a Cake for each cake in the array', () => {
        const { wrapper, props } = setup();
        const cake = wrapper.find(Cake);

        expect(cake).toHaveLength(props.cakes.length);
    });

    it('should render No cakes yet when cakes length is empty', () => {
        const { wrapper } = setup({ cakes: [] });
        const noCakes = wrapper.find('.test-no-cakes-text');

        expect(noCakes.text()).toBe('No cakes yet');
    });

    it('should call getCakes on load', () => {
        const { props } = setup();

        expect(props.getCakes).toHaveReturnedTimes(1);
    });
});