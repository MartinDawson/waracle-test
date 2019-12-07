import * as React from 'react';
import { ICake } from '../types';
import { Link } from 'react-router-dom';

export interface ICakeDetailsProps {
    cake: ICake;
}

const CakeDetails: React.FC<ICakeDetailsProps> = (props) => {
    return (
        <>
            <h1>Details</h1>
            <div>
                <img src={props.cake.imageUrl} alt="Cake Image" />
            </div>
            <div className="test-cake-name">{props.cake.name}</div>
            <div className="test-cake-yum-factor">Yum Factor: {props.cake.yumFactor}</div>
            <div className="test-cake-comment">{props.cake.comment}</div>
            <div>
                <Link to="/cakes">Done</Link>
            </div>
        </>
    );
}

export default CakeDetails;