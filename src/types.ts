import { Map } from 'immutable';

export type CakesStateMap = Map<ICake['id'], ICake>;

export interface ICakeState {
  cakes: CakesStateMap;
}

export interface IStoreState {
  cake: ICakeState;
}

export interface ICake {
  id: string;
  name: string;
  comment?: string;
  imageUrl: string;
  yumFactor: number;
}