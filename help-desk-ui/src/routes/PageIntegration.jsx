import React, { useEffect, useState } from 'react';
import "./routes.css"
import Integratedpage from './Integrate-page';
import { Paper, Button} from '@mui/material';
import Appinfo from '../../config';
import { useNavigate } from 'react-router-dom';


const PageIntegration = () => {
    const [isPageConnected,setConnection] = useState(false);
    const [PagesData,setPagesData] = useState([]);
    const nevigate = useNavigate();



    const logout = ()=>{
       localStorage.setItem("auth-token","");
       localStorage.setItem("access-token","");
       nevigate("/signin");
    }

    useEffect(()=>{
        // const token = localStorage.getItem("auth-token");
        const access_token =  localStorage.getItem("access-token");
        const auth_token =  localStorage.getItem("auth-token");
        if(!access_token && !auth_token){
        nevigate("/signin")  
        } 

    },[])



    async function fetchPageInformation() {
        try {
          const response = await fetch(`http://graph.facebook.com/me/accounts?access_token=${Appinfo['access-token']}`,{
            method :"GET"
          });
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const fetch_pages_info = await response.json();
          console.log(fetch_pages_info.data)
          setPagesData(fetch_pages_info.data);
        } catch (error) {
          alert('Error fetching data:', error.message);
          console.error('Error fetching data:', error.message);
        }
      }

      const handleConnectRequest = ()=>{
        console.log("request send");
        setConnection(!isPageConnected);
        fetchPageInformation();
    }
      

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 shadow '>

                <Paper elevation={3} className='Box'>
                <h5 className='text-center my-4'>Facebook page Integration</h5>
                {
                    !isPageConnected && <div> 
                <Button variant="contained" onClick={handleConnectRequest} color="primary" className="w-100">Connect Page</Button>
                <Button variant="contained" onClick={logout} color="error" className="w-100 my-2">Log out</Button>
                </div>
                    
                    } 

            { isPageConnected &&
        PagesData.map((page,index)=>{
            return ( 
                <Integratedpage key = {index} setConnection = {setConnection} page={page} ></Integratedpage>
                 
                 )})}
             </Paper>
           
        </div>
    );
};

export default PageIntegration;
