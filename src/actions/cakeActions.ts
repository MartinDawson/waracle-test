import { Dispatch, Action } from 'redux';
import { ICake } from '../types';
import cakeApi, { SaveCakeInput } from '../api/cakeApi';

export enum CAKE_ACTIONS {
    ADD_CAKE = 'ADD_CAKE',
    CAKE_UPDATED = 'CAKE_UPDATED',
    CAKE_FETCHED = 'CAKE_FETCHED',
    SET_CAKES = 'SET_CAKES',
    CAKE_DELETED = 'CAKE_DELETED'
}

export interface IAddCakeAction extends Action<CAKE_ACTIONS.ADD_CAKE> {
    cake: ICake;
}

export interface ICakeUpdatedAction extends Action<CAKE_ACTIONS.CAKE_UPDATED> {
    cake: ICake;
}

export interface ICakeFetchedAction extends Action<CAKE_ACTIONS.CAKE_FETCHED> {
    cake: ICake;
}

export interface ISetCakesAction extends Action<CAKE_ACTIONS.SET_CAKES> {
    cakes: ICake[];
}

export interface ICakeDeletedAction extends Action<CAKE_ACTIONS.CAKE_DELETED> {
    id: ICake['id'];
}

export type ICakeActions = IAddCakeAction | ICakeUpdatedAction | ICakeFetchedAction | ISetCakesAction | ICakeDeletedAction;

const addCake = (cake: ICake): IAddCakeAction => ({
    type: CAKE_ACTIONS.ADD_CAKE,
    cake
});

const cakeUpdated = (cake: ICake): ICakeUpdatedAction => ({
    type: CAKE_ACTIONS.CAKE_UPDATED,
    cake
});

const cakeFetched = (cake: ICake): ICakeFetchedAction => ({
    type: CAKE_ACTIONS.CAKE_FETCHED,
    cake
});

const setCakes = (cakes: ICake[]): ISetCakesAction => ({
    type: CAKE_ACTIONS.SET_CAKES,
    cakes
});

const cakeDeleted = (id: ICake['id']): ICakeDeletedAction => ({
    type: CAKE_ACTIONS.CAKE_DELETED,
    id
});

export const updateCake = (cake: ICake) => {
    return async (dispatch: Dispatch) => {
        await cakeApi.updateCake(cake);

        dispatch(cakeUpdated(cake));
    };
}

export const saveCake = (cake: SaveCakeInput) => {
    return async (dispatch: Dispatch) => {
        const newCake = await cakeApi.saveCake(cake);
        
        dispatch(addCake(newCake));
    };
}

export const getCakes = () => {
    return async (dispatch: Dispatch) => {
        const cakes = await cakeApi.getCakes();
        
        dispatch(setCakes(cakes));
    };
}

export const getCake = (id: ICake['id']) => {
    return async (dispatch: Dispatch) => {
        const cake = await cakeApi.getCake(id);
        
        dispatch(cakeFetched(cake));
    };
}

export const deleteCake = (id: ICake['id']) => {
    return async (dispatch: Dispatch) => {
        await cakeApi.deleteCake(id);

        dispatch(cakeDeleted(id));
    };
}