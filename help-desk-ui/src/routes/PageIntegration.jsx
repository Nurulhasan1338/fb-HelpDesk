import React, { useState } from 'react';
import "./routes.css"
import Integratedpage from './Integrate-page';
import { Paper, Button} from '@mui/material';


const PageIntegration = () => {
    const [isPageConnected,setConnection] = useState(false);
    const handleConnectRequest = ()=>{
        console.log("request send");
        setConnection(!isPageConnected);
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 '>
            <Paper elevation={3} className='signUpBox'>
                <h5 className='text-center my-4'>Facebook page Integration</h5>
                {
                    !isPageConnected?<Button variant="contained" onClick={handleConnectRequest} color="primary" className="w-100">Connect Page</Button>: <Integratedpage setConnection = {setConnection}></Integratedpage>
                }
                
            </Paper>
        </div>
    );
};

export default PageIntegration;
