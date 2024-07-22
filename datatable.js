import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';

const DataTable = () => {
    // Mock car data
    const cars = [
        { id: 1, make: 'Toyota', model: 'Camry', year: 2020, price: 25000 },
        { id: 2, make: 'Honda', model: 'Civic', year: 2019, price: 22000 },
        { id: 3, make: 'Ford', model: 'Mustang', year: 2021, price: 35000 }
    ];

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Model</TableCell>
                        <TableCell>Year</TableCell>
                        <TableCell>Price ($)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cars.map(car => (
                        <TableRow key={car.id}>
                            <TableCell>{car.id}</TableCell>
                            <TableCell>{car.make}</TableCell>
                            <TableCell>{car.model}</TableCell>
                            <TableCell>{car.year}</TableCell>
                            <TableCell>{car.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DataTable;
