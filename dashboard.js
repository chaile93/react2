import React from 'react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import DataTable from './DataTable';
import SignIn from './SignIn';
import SignOut from './SignOut';

const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSignIn = () => {
        setIsLoggedIn(true);
    };

    const handleSignOut = () => {
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            Car Inventory Dashboard
                        </Typography>
                        <div style={{ flexGrow: 1 }} />
                        {isLoggedIn ? (
                            <Button color="inherit" onClick={handleSignOut}>Sign Out</Button>
                        ) : (
                            <Button color="inherit" component={Link} to="/signin">Sign In</Button>
                        )}
                    </Toolbar>
                </AppBar>
                <Container style={{ marginTop: '20px' }}>
                    <Switch>
                        <Route exact path="/">
                            {isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/signin" />}
                        </Route>
                        <Route path="/signin">
                            {isLoggedIn ? <Redirect to="/dashboard" /> : <SignIn onSignIn={handleSignIn} />}
                        </Route>
                        <Route path="/dashboard">
                            {isLoggedIn ? <DataTable /> : <Redirect to="/signin" />}
                        </Route>
                    </Switch>
                </Container>
            </div>
        </Router>
    );
}

export default Dashboard;

const Dashboard = () => {
    return (
        <div>
            <h1>Car Inventory Dashboard</h1>
            <nav>
                <ul>
                    <li><Link to="/cars">View Cars</Link></li>
                    <li><Link to="/add-car">Add Car</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Dashboard;

