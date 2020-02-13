import React from 'react';
import './styles.css';

const Card = props => (
    <div className="card card-1">
        <h2>{props.repository.name}</h2>
        
    </div>
);

export default Card;