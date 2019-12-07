import axios from 'axios';
import mockCakes, { mockCake } from '../mocks/cakes';
import cakeApi, { CAKES_BASE_API } from './cakeApi';

let mockCakeBaseApi = CAKES_BASE_API;

// Could also have used axios mock library and 
// probably would in real impl.
jest.mock('axios', () => {
    return {
        get: jest.fn((url) => {
            if (url === mockCakeBaseApi) {
                return Promise.resolve({
                    data: mockCake
                })
            }
            return Promise.resolve({
                data: mockCakes
            })
        }),
        post: jest.fn(() => Promise.resolve({ data: mockCake })),
        put: jest.fn(),
        delete: jest.fn()
    };
});

describe('cakeApi', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })

    it('updateCake calls put with the correct url and body', async () => {
        await cakeApi.updateCake(mockCake);

        expect(axios.put).toHaveBeenCalledTimes(1);
        expect(axios.put).toHaveBeenCalledWith(
            `${CAKES_BASE_API}/cakes/${mockCake.id}`,
            {
                cake: mockCake
            }
        );
    });

    it('saveCake calls post with the correct url and body', async () => {
        await cakeApi.saveCake(mockCake);

        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(axios.post).toHaveBeenCalledWith(
            `${CAKES_BASE_API}`,
            {
                cake: mockCake
            }
        );
    });

    it('getCakes calls get with the correct url and body', async () => {
        await cakeApi.getCakes();

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(
            `${CAKES_BASE_API}`
        );
    });

    it('getCake calls get with the correct url and body', async () => {
        const id = 'testId';

        await cakeApi.getCake(id);

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(
            `${CAKES_BASE_API}/cake/${id}`
        );
    });

    it('deleteCake calls delete with the correct url and body', async () => {
        const id = 'testId';

        await cakeApi.deleteCake(id);

        expect(axios.delete).toHaveBeenCalledTimes(1);
        expect(axios.delete).toHaveBeenCalledWith(
            `${CAKES_BASE_API}/${id}`
        );
    });
});