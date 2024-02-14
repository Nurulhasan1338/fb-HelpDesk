import React, { useEffect, useState } from 'react';
import "./routes.css"
import Integratedpage from './Integrate-page';
import { Paper, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const PageIntegration = () => {
    const [isPageConnected,setConnection] = useState(false);
    const nevigate = useNavigate();
    const handleConnectRequest = ()=>{
        console.log("request send");
        setConnection(!isPageConnected);
    }
    const logout = ()=>{
       localStorage.setItem("auth-token","");
       nevigate("/signin");
    }
    useEffect(()=>{
        const token = localStorage.getItem("auth-token");
        if(!token){
        nevigate("/signin")  
        }   
    },[])

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 '>
            <Paper elevation={3} className='signUpBox'>
                <h5 className='text-center my-4'>Facebook page Integration</h5>
                {
                    !isPageConnected && <div> 
                <Button variant="contained" onClick={handleConnectRequest} color="primary" className="w-100">Connect Page</Button>
                <Button variant="contained" onClick={logout} color="error" className="w-100 my-2">Log out</Button>
                </div>
                    
                    }
                 {isPageConnected &&   
                <Integratedpage setConnection = {setConnection}></Integratedpage>
                 }
                
                
            </Paper>
        </div>
    );
};

export default PageIntegration;
