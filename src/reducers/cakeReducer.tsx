import { ICakeState, ICake } from '../types';
import { ICakeActions, CAKE_ACTIONS } from '../actions/cakeActions';
import { Reducer } from 'redux';
import { Map } from 'immutable';

const initialState: ICakeState = {
  cakes: Map<ICake['id'], ICake>()
};

export const cakeReducer: Reducer<ICakeState, ICakeActions> = (state = initialState, action): ICakeState => {
  switch (action.type) {
    case CAKE_ACTIONS.ADD_CAKE:
    case CAKE_ACTIONS.CAKE_UPDATED:
    case CAKE_ACTIONS.CAKE_FETCHED: {
      const newCakes = state.cakes.set(action.cake.id, action.cake);

      return { ...state, cakes: newCakes };
    };
    case CAKE_ACTIONS.SET_CAKES: {
      return { ...state, cakes: Map(action.cakes.map(cake => [cake.id, cake])) };
    };
    case CAKE_ACTIONS.CAKE_DELETED: {
      const newCakes = state.cakes.delete(action.id);

      return { ...state, cakes: newCakes };
    };
    default:
      return state;
  }
}

export default cakeReducer;