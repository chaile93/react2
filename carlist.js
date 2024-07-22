import React from 'react';

const CarList = ({ cars }) => {
    return (
        <div>
            <h2>Car List</h2>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        {car.make} {car.model} - {car.year}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CarList;
