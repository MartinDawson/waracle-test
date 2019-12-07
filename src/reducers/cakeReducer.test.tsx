import cakeReducer from './cakeReducer';
import { CAKE_ACTIONS } from '../actions/cakeActions';
import mockCakes, { mockCake, mockCakesState } from '../mocks/cakes';

describe('cakeReducer', () => {
    [
        CAKE_ACTIONS.ADD_CAKE, 
        CAKE_ACTIONS.CAKE_UPDATED,
        CAKE_ACTIONS.CAKE_FETCHED
    ].map((actionName) => {
        it(`${actionName} adds the new cake to the cakes`, () => {
            const state = cakeReducer({
                cakes: mockCakesState
            },
            // @ts-ignore 
            {
                type: actionName,
                cake: mockCake
            });
    
            expect(state).toEqual({
                cakes: mockCakesState.concat(mockCakesState)
            });
        });
    });

    it(`${CAKE_ACTIONS.SET_CAKES} sets the new cakes and overwrites the existing cakes`, () => {
        const newMockCakesState = mockCakesState.set('testId', {
            ...mockCake,
            comment: 'testCommentNew'
        });

        const state = cakeReducer({
            cakes: newMockCakesState
        },
        {
            type: CAKE_ACTIONS.SET_CAKES,
            cakes: mockCakes
        });

        expect(state).toEqual({
            cakes: mockCakesState
        });
    });

    it(`${CAKE_ACTIONS.CAKE_DELETED} deletes the cake and returns the new cakes`, () => {
        const state = cakeReducer({
            cakes: mockCakesState
        },
        {
            type: CAKE_ACTIONS.CAKE_DELETED,
            id: mockCake.id
        });

        const newMockCakesState = mockCakesState.delete(mockCake.id);

        expect(state).toEqual({
            cakes: newMockCakesState
        });
    });
});