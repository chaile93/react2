import React, { useState } from 'react';

const AddCarForm = ({ onAddCar }) => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create new car object
        const newCar = {
            make,
            model,
            year
        };
        // Call parent function to add car
        onAddCar(newCar);
        // Clear form fields
        setMake('');
        setModel('');
        setYear('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Car</h2>
            <label>
                Make:
                <input type="text" value={make} onChange={(e) => setMake(e.target.value)} required />
            </label>
            <label>
                Model:
                <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
            </label>
            <label>
                Year:
                <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
            </label>
            <button type="submit">Add Car</button>
        </form>
    );
}

export default AddCarForm;
