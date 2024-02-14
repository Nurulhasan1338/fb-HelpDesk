import React from 'react'
import "./comp.css";
import Grid from '@mui/joy/Grid';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';

const Client = () => {
    return (
        <Grid container spacing={0} className="smallText" sx={{ flexGrow: 1, padding: 1 }}>

            <Grid xs={11}>
            <div className='d-flex '>
                <div className='me-2 p-1' id="setSize">
                <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
                </div>
                <div className='text-start'> 
                <p className="clientName" for="flexCheckDefault"> Nurul Hasan</p>
                <p className='client-type text-muted'>Facebook DM</p>
                </div>
            </div>
            </Grid>
            <Grid xs={1} sx={{ fontSize: "12px",fontWeight:"600" }} className="text-secondary">10m</Grid>
            <Grid xs={12}>
            <div className='mt-3 text-start'>
                        <p className='smallText'>Awesome Product?</p>    
                        <p className='fw-light client-type'>Hii do you have any T-shirt avai...</p>    
                    </div>
            </Grid>

        </Grid>
    )
}

export default Client
