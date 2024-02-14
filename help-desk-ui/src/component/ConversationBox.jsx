import React from 'react'
import Grid from '@mui/joy/Grid';
import { RiMenu2Line } from "react-icons/ri";
import { GrRefresh } from "react-icons/gr";
import ClientBox from "./Client"




const ConversationBox = () => {
    return (
        <Grid container spacing={0} sx={{ flexGrow: 1,paddingY:1 ,margin:0}}>
            <Grid xs={1}  sx={{paddingX:"8px"}} className='text-muted' ><button  className='rm-bt text-muted'><RiMenu2Line/></button></Grid>
            <Grid xs={10}>
                <h5 className='fw-bold title'>Conversation</h5>
            </Grid>
            <Grid xs={1} className='text-muted'>
               <button  className='rm-bt'><GrRefresh/>
                </button> 
            
        </Grid>
       
            <Grid xs={12} className="border">
                <button className='rm-bt boxClient'>
                <ClientBox/>
                </button>
                <button className='rm-bt boxClient'>
                <ClientBox/>
                </button>
                <button className='rm-bt boxClient'>
                <ClientBox/>
                </button>
            </Grid>

        </Grid>
    )
}

export default ConversationBox
