import { ICake } from '../types';
import { Map } from 'immutable';

const mockCakes: ICake[] = [
    { id: 'testId', name: 'Chocolate Cake', comment: 'nice cake', imageUrl: 'cake.jpg', yumFactor: 5 },
    { id: 'testId1', name: 'Chocolate Cake1', comment: 'nice cake1', imageUrl: 'cake1.jpg', yumFactor: 52 },
    { id: 'testId2', name: 'Chocolate Cake2', comment: 'nice cake2', imageUrl: 'cake2.jpg', yumFactor: 2 }
];

export const mockCake = mockCakes[0];

export const mockCakesState = Map<ICake['id'], ICake>(mockCakes.map(cake => [cake.id, cake]));

export default mockCakes;