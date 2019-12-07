import { updateCake, CAKE_ACTIONS, saveCake, getCakes, getCake, deleteCake } from './cakeActions';
import mockCakes, { mockCake } from '../mocks/cakes';
import cakeApi from '../api/cakeApi';

jest.mock('../api/cakeApi', () => {
    return {
        updateCake: jest.fn(),
        saveCake: jest.fn(() => mockCake),
        getCakes: jest.fn(() => mockCakes),
        getCake: jest.fn(() => mockCake),
        deleteCake: jest.fn()
    };
});

const dispatch = jest.fn();

describe('cakeActions', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('updateCake calls the correct api function and dispatches cakeUpdated with cake', async () => {
        await updateCake(mockCake)(dispatch)

        expect(cakeApi.updateCake).toHaveBeenCalledTimes(1);
        expect(cakeApi.updateCake).toHaveBeenCalledWith(mockCake);
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
            type: CAKE_ACTIONS.CAKE_UPDATED,
            cake: mockCake
        })
    });

    it('saveCake calls the correct api function and dispatches addCake with cake', async () => {
        await saveCake(mockCake)(dispatch)

        expect(cakeApi.saveCake).toHaveBeenCalledTimes(1);
        expect(cakeApi.saveCake).toHaveBeenCalledWith(mockCake);
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
            type: CAKE_ACTIONS.ADD_CAKE,
            cake: mockCake
        })
    });

    it('getCakes calls the correct api function and dispatches setCakes with the cakes', async () => {
        await getCakes()(dispatch)

        expect(cakeApi.getCakes).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
            type: CAKE_ACTIONS.SET_CAKES,
            cakes: mockCakes
        })
    });

    it('getCake calls the correct api function and dispatches cakeFetched with the cake id', async () => {
        const id = 'testId';

        await getCake(id)(dispatch)

        expect(cakeApi.getCake).toHaveBeenCalledTimes(1);
        expect(cakeApi.getCake).toHaveBeenCalledWith(id);
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
            type: CAKE_ACTIONS.CAKE_FETCHED,
            cake: mockCake
        })
    });

    it('deleteCake calls the correct api function and dispatches deleteCake with the cake id', async () => {
        await deleteCake(mockCake.id)(dispatch)

        expect(cakeApi.deleteCake).toHaveBeenCalledTimes(1);
        expect(cakeApi.deleteCake).toHaveBeenCalledWith(mockCake.id);
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
            type: CAKE_ACTIONS.CAKE_DELETED,
            id: mockCake.id
        })
    });
});