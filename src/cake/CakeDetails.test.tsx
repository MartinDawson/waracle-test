import Cake, { ICakeProps } from './Cake';
import { mockCake } from '../mocks/cakes';
import { shallow } from 'enzyme';
import * as React from 'react';
import { Link } from 'react-router-dom';
import CakeDetails, { ICakeDetailsProps } from './CakeDetails';

const setup = (newProps?: Partial<ICakeDetailsProps>) => {
    const props: ICakeDetailsProps = {
        cake: mockCake,
        ...newProps
    };

    const wrapper = shallow(<CakeDetails {...props} />);

    return {
        wrapper,
        props
    }
};

describe('CakeDetails', () => {
    it('should render imageUrl in the image', () => {
        const { wrapper, props } = setup();
        const img = wrapper.find('img');

        expect(img.props().src).toBe(props.cake.imageUrl);
    });

    it('should render name', () => {
        const { wrapper, props } = setup();
        const cakeName = wrapper.find('.test-cake-name');

        expect(cakeName.text()).toBe(props.cake.name);
    });

    it('should render yum factor', () => {
        const { wrapper, props } = setup();
        const cakeYumFactor = wrapper.find('.test-cake-yum-factor');

        expect(cakeYumFactor.text()).toBe(`Yum Factor: ${props.cake.yumFactor}`);
    });

    it('should render comment', () => {
        const { wrapper, props } = setup();
        const cakeComment = wrapper.find('.test-cake-comment');

        expect(cakeComment.text()).toBe(props.cake.comment);
    });

    it('should render Done link', () => {
        const { wrapper } = setup();
        const link = wrapper.find(Link);

        expect(link.props().to).toBe('/cakes');
    });
});