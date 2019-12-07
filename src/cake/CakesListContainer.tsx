import { connect, MapStateToProps } from 'react-redux';
import { getCakes, deleteCake } from '../actions/cakeActions';
import { IStoreState, ICake } from '../types';
import CakesList from './CakesList';

interface IStateProps {
  cakes: ICake[];
}

export const mapStateToProps: MapStateToProps<IStateProps, {}, IStoreState> = (state) => {
  return {
    cakes: Array.from(state.cake.cakes.values())
  };
}

export default connect(mapStateToProps, {
  getCakes,
  deleteCake
})(CakesList);