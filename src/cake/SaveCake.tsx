import * as React from 'react';
import { SaveCakeInput } from '../api/cakeApi';
import CakeForm from './CakeForm';

export interface ISaveCakeProps {
    saveCake: (cake: SaveCakeInput) => void;
}

const SaveCake: React.FC<ISaveCakeProps> = (props) => {
    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        props.saveCake({ 
            name: (e.currentTarget.name as any).value, 
            comment: e.currentTarget.comment.value, 
            imageUrl: e.currentTarget.imageUrl.value,
            yumFactor: parseInt(e.currentTarget.yumFactor.value, 10)
        });
    }, []);

    return (
        <CakeForm 
            titleText="Add cake"
            handleSubmit={handleSubmit}
        />
    );
};

export default SaveCake;