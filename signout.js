import React from 'react';
import { Typography } from '@material-ui/core';

const SignOut = ({ onSignOut }) => {
    return (
        <div>
            <Typography variant="h4">Signed Out</Typography>
            <Typography>Thank you for using the Car Inventory Dashboard.</Typography>
        </div>
    );
}

export default SignOut;
