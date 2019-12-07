import { RouteComponentProps } from 'react-router';

const mockRouteProps: RouteComponentProps = {
    history: {
        length: 0,
        action: 'PUSH',
        location: {
            pathname: '',
            search: '',
            state: {},
            hash: ''
        },
        push: () => {},
        replace: () => {},
        go: () => {},
        goBack: () => {},
        goForward: () => {},
        block: () => () => {},
        listen: () => () => {},
        createHref: () => ''
    },
    location: {
        pathname: '',
        search: '',
        state: {},
        hash: ''
    },
    match: {
        isExact: true,
        path: '',
        url: '',
        params: {}
    },
};

export default mockRouteProps;
