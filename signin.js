import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';

const SignIn = ({ onSignIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sign in logic (replace with actual authentication)
        if (username === 'admin' && password === 'password') {
            onSignIn();
        }
    };

    return (
        <div>
            <Typography variant="h4">Sign In</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    margin="normal"
                    required
                />
                <br />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    required
                />
                <br />
                <Button variant="contained" color="primary" type="submit">
                    Sign In
                </Button>
            </form>
        </div>
    );
}

export default SignIn;
