import axios from 'axios';
import { ICake } from '../types';

export const CAKES_BASE_API = '/api/cakes';

export type SaveCakeInput = Omit<ICake, 'id'>;

export default {
    updateCake: async (cake: ICake) => {
        axios.put(`${CAKES_BASE_API}/cakes/${cake.id}`, {
            cake
        });
    },
    saveCake: async (cake: SaveCakeInput): Promise<ICake> => {
        const response = await axios.post(`${CAKES_BASE_API}`, {
            cake
        });

        return response.data;
    },
    getCakes: async (): Promise<ICake[]> => {
        const response = await axios.get<ICake[]>(`${CAKES_BASE_API}`);

        return response.data;
    },
    getCake: async (id: string): Promise<ICake> => {
        const response = await axios.get<ICake>(`${CAKES_BASE_API}/cake/${id}`);

        return response.data;
    },
    deleteCake: async (id: string) => {
        axios.delete(`${CAKES_BASE_API}/${id}`);
    },
}