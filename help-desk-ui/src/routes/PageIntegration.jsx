import React, { useEffect, useState } from 'react';
import "./routes.css"
import Integratedpage from './Integrate-page';
import { Paper, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const PageIntegration = () => {
    const [isPageConnected,setConnection] = useState(false);
    const [PagesData,setPagesData] = useState([]);
    const nevigate = useNavigate();


    


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



    async function fetchPageInformation() {
        try {
          const response = await fetch("http://graph.facebook.com/me/accounts?access_token=EAANKRnnVZAGUBOwZB3vfuyvgtThYURJhW7HvJB2JGVWSgzgDupwhiUAvCb8sLmWCWfp62rDCYsyDZC2xzXNk8lDNMHiSXpN6M5laa9f742ZBO0KDHGkua7WG257dS8SGpQ16QPU10ZCzZAsXStBywSjrZAysbd4d9MOF3azbLZAdQUpIhsMy5ovQOr7fpDc9ZCBnpx7GRXfI5QYwdxqZBSNz69SDhN9AZDZD",{
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
