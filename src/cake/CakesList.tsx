import * as React from 'react';
import { ICake } from '../types';
import Cake from './Cake';

export interface ICakesListProps {
    cakes: ICake[];
    getCakes: () => void;
    deleteCake: (id: ICake['id']) => void;
}

const CakesList: React.FC<ICakesListProps> = (props) => {
    React.useEffect(() => {
        props.getCakes();
    }, [props.getCakes]);

    return (
        <>
            <h1>Cake List</h1>
            <div>
                {
                    props.cakes.length ? (
                        <>
                            {props.cakes.map(cake => <Cake
                                cake={cake}
                                key={cake.id}
                                deleteCake={props.deleteCake}
                            />
                            )}
                        </>
            
                    ) : <div className="test-no-cakes-text">No cakes yet</div>
                }
            </div>
        </>
    );
}

export default CakesList;