import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { theme } from '../context/themes'

const Register = () => {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                </Avatar>

                <Typography component="h1" variant="h5">
                    Register New
                </Typography>
                <Box component="form" sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={() => {
                            console.log("hello")
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        name="password"
                        label="Retype Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    {/* <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={['Sales Department', 'Account', 'Production']}
                        sx={{ width: '100%', my: '1rem' }}
                        renderInput={(params) => <TextField {...params} label="Select Role" />}
                    /> */}

                    <FormControl fullWidth sx={{my:'1rem'}}>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Role"
                        >
                            <MenuItem value={"Sales"}>Sales</MenuItem>
                            <MenuItem value={"Account"}>Account</MenuItem>
                            <MenuItem value={"Production"}>Production</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3, mb: 2, bgcolor: 'primary.main',
                            ":hover": {
                                bgcolor: 'primary.hoverColor'
                            }
                        }}
                        onClick={(e) => {
                            e.preventDefault()
                        }}
                    >
                        Register
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/" variant="body2">
                                {"I have an account"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default Register