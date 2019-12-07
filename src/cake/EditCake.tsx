import * as React from 'react';
import { ICake } from '../types';
import CakeForm from './CakeForm';

export interface IFormProps {
    id: string;
    name: string;
    comment?: string;
    imageUrl: string;
    yumFactor: number;
    updateCake: (cake: ICake) => void;
}

const EditCake: React.FC<IFormProps> = (props) => {
    const handleSubmit = React.useCallback((e) => {
        props.updateCake({
            id: props.id,
            name: (e.currentTarget.name as any).value, 
            comment: e.currentTarget.comment.value, 
            imageUrl: e.currentTarget.imageUrl.value, 
            yumFactor: parseInt(e.currentTarget.yumFactor.value, 10)
        });
    }, []);

    return (
        <CakeForm 
            titleText="Edit cake"
            handleSubmit={handleSubmit}
            name={props.name}
            comment={props.comment}
            imageUrl={props.imageUrl}
            yumFactor={props.yumFactor.toString()}
        />
    );
};

export default EditCake;