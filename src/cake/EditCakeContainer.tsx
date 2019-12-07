import { connect, MapStateToProps } from 'react-redux';
import { IStoreState, ICake } from '../types';
import { RouteComponentProps } from 'react-router';
import { updateCake } from '../actions/cakeActions';
import CakeForm from './EditCake';

interface IRouteProps {
    id: string;
}

export const mapStateToProps: MapStateToProps<ICake, RouteComponentProps<IRouteProps>, IStoreState> = (state, props) => {
    const cake = state.cake.cakes.get(props.match.params.id)!;

    return {
        ...cake
    };
}

export default connect(mapStateToProps, {
    updateCake
})(CakeForm);
