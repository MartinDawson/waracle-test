import { connect, MapStateToProps } from 'react-redux';
import { IStoreState, ICake } from '../types';
import { RouteComponentProps } from 'react-router';
import CakeDetails from './CakeDetails';

export type CakeDetailsContainerProps = RouteComponentProps<IRouteParams>;

interface IRouteParams {
    id: string;
}

interface IStateProps {
    cake: ICake;
}

export const mapStateToProps: MapStateToProps<IStateProps, CakeDetailsContainerProps, IStoreState> = (state, props) => {
    return {
        cake: state.cake.cakes.get(props.match.params.id)!
    };
}

export default connect(mapStateToProps)(CakeDetails);