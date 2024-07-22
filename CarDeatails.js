import React from 'react';

const CarDetails = ({ car }) => {
    return (
        <div>
            <h2>Car Details</h2>
            <p><strong>Make:</strong> {car.make}</p>
            <p><strong>Model:</strong> {car.model}</p>
            <p><strong>Year:</strong> {car.year}</p>
        </div>
    );
}

export default CarDetails;
