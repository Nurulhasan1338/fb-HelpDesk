import React,{useState} from 'react';
import "./routes.css"
import { Paper, Button, FormControlLabel, Checkbox } from '@mui/material';
import FormControl from '@mui/joy/FormControl';
import Divider from '@mui/joy/Divider';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/joy/CircularProgress';

const Signin = () => {
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [isLodding, setLodding] = useState(false);

    const navigate = useNavigate();
    const GotoSignin = () => {
        navigate("/")
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLodding(true);
            const response = await fetch(`http://localhost:3000/api/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: userEmail,
                        password: userPassword
                    }),
                }
            );
            const token = await response.json();
            setLodding(false);
            console.log(token);
            localStorage.setItem("auth-token", token);
            const tokenValue = localStorage.getItem("auth-token")
            console.log(tokenValue);

            setEmail("");
            setPassword("");

            if (token.success === true) {
                navigate("/pageIntegrate");
            } else {
                console.log(token.error);
                alert(token.error);
            }
        } catch (err) {
            alert("failed to signup", err);
        }
    };
    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);

    }
    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);

    }



    return (
        <div className='d-flex justify-content-center align-items-center vh-100 '>
            <Paper elevation={3} className='signUpBox'>
                <h5 className='text-center my-4'>Log In</h5>
                <form onSubmit={handleSubmit}>
                    <FormControl className="my-2">
                        <FormLabel className="fontSize">Email</FormLabel>
                        <Input value={userEmail} onChange={handleEmail} placeholder="xyz@gamail.com" required />
                    </FormControl>
                    <FormControl className="my-2">
                        <FormLabel className="fontSize">Password</FormLabel>
                        <Input value={userPassword} onChange={handlePassword} placeholder="jbfu2323kdf@3" required/>
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Remember me"
                        className="fs-3"
                    />
                    <div className='lodder'>
                        {
                            isLodding && <CircularProgress color="primary" />
                        }
                    </div>
                    <Button variant="contained" type='submit' color="primary" className='w-100 mt-4 fontSize' >
                        Log in
                    </Button>
                </form>
                <Divider orientation="horizontal">Or</Divider>
                <Button variant="contained" color="primary" className="w-100">
                    continue with Facebook
                </Button>
                <div className="fontSize w-100 text-center">
                    <p>new user? <a href="" onClick={GotoSignin}>Register</a></p>
                </div>
            </Paper>
        </div>
    );
};

export default Signin;
