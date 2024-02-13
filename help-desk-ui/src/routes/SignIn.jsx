import React from 'react';
import "./routes.css"
import { Paper, Button, FormControlLabel, Checkbox } from '@mui/material';
import FormControl from '@mui/joy/FormControl';
import Divider from '@mui/joy/Divider';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';

const Signin = () => {


    return (
        <div className='d-flex justify-content-center align-items-center vh-100 '>
            <Paper elevation={3} className='signUpBox'>
                <h5 className='text-center my-4'>Log In</h5>
                <form action="submit">
                    <FormControl className="my-2">
                        <FormLabel className="fontSize">Email</FormLabel>
                        <Input placeholder="xyz@gamail.com" />
                    </FormControl>
                    <FormControl className="my-2">
                        <FormLabel className="fontSize">Password</FormLabel>
                        <Input placeholder="jbfu2323kdf@3" />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Remember me"
                        className="fs-3"
                    />

                    <Button variant="contained" color="primary" className='w-100 mt-4 fontSize' >
                        Log in
                    </Button>
                </form>
                <Divider orientation="horizontal">Or</Divider>
                <Button variant="contained" color="primary" className="w-100">
                    continue with Facebook
                </Button>
                <div className="fontSize w-100 text-center">
                    <p>new user? <a href="">Register</a></p>
                </div>
            </Paper>
        </div>
    );
};

export default Signin;
