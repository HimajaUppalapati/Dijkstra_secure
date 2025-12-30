import { Button, TextField, Typography, Box, Paper } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = () => {
        // Simple mock authentication
        if (email && password) {
            navigate('/loggedin');
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <Paper sx={{ p: 4, width: 400 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Sign In
                </Typography>
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSignIn}>
                    Sign In
                </Button>
            </Paper>
        </Box>
    );
};

export default SignIn;