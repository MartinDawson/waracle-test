import * as React from 'react';
import { ICake } from '../types';
import { Link } from 'react-router-dom';

export interface ICakeProps {
    cake: ICake;
    deleteCake: (cake: ICake['id']) => void;
}

const Cake: React.FC<ICakeProps> = ({ cake, deleteCake }) => {
    const onClick = React.useCallback(() => {
        deleteCake(cake.id);
    }, [deleteCake, cake]);

    return (
        <>
            <div>
                <img src={cake.imageUrl} alt="Cake Image" />
            </div>
            <div >
                <Link to={`/cakes/${cake.id}`}>{cake.name}</Link>
            </div>
            <div >
                <Link to={`/cakes/edit/${cake.id}`}>Edit</Link>
                <button onClick={onClick}>Delete</button>
            </div>
        </>
    );
}

export default Cake;