import Cake, { ICakeProps } from './Cake';
import { mockCake } from '../mocks/cakes';
import { shallow } from 'enzyme';
import * as React from 'react';
import { Link } from 'react-router-dom';

const setup = (newProps?: Partial<ICakeProps>) => {
    const props: ICakeProps = {
        cake: mockCake,
        deleteCake: jest.fn(),
        ...newProps
    };

    const wrapper = shallow(<Cake {...props} />);

    return {
        wrapper,
        props
    }
};

describe('Cake', () => {
    it('should render src in the image', () => {
        const { wrapper, props } = setup();
        const img = wrapper.find('img');

        expect(img.props().src).toBe(props.cake.imageUrl);
    });

    it('should render name in the first cake link', () => {
        const { wrapper, props } = setup();
        const link = wrapper.find(Link).at(0);

        expect(link.props().to).toBe(`/cakes/${props.cake.id}`);
        expect(link.props().children).toBe(props.cake.name);
    });

    it('should render Edit in the second cake link', () => {
        const { wrapper, props } = setup();
        const link = wrapper.find(Link).at(1);

        expect(link.props().to).toBe(`/cakes/edit/${props.cake.id}`);
        expect(link.props().children).toBe('Edit');
    });

    it ('should render Delete in button with onClick', () => {
        const { wrapper, props } = setup();
        const button = wrapper.find('button');

        button.simulate('click');

        expect(props.deleteCake).toHaveBeenCalledTimes(1);
        expect(props.deleteCake).toHaveBeenCalledWith(props.cake.id);
        expect(button.text()).toBe('Delete');
    });
});