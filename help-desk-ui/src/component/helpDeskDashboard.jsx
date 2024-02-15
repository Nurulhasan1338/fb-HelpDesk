import React from 'react'
import Grid from '@mui/joy/Grid';
import { IoFileTrayFull } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TbBrandUbuntu } from "react-icons/tb";
import ConversationBox from "./ConversationBox";
import ClientDetails from "./ClientDetails"
import ChatBox from "./ChatBox"

import Profile from "./Profile"
import "./comp.css"




const helpDeskDashboard = () => {
  return (
    <div className='container-fluid w-100 p-0 m-0'>
    <Grid container spacing={0} sx={{ flexGrow: 1,height:"100vh"}}>
      <Grid xs={0.6} className="d-flex flex-column justify-content-between align-items-center">
        <div className='d-flex flex-column w-100'>
            <button className='decoration-none p-2 Icon rm-bt'><TbBrandUbuntu /></button>
            <button className='decoration-none p-2 Icon rm-bt'><IoFileTrayFull /></button>
            <button className='decoration-none p-2 Icon rm-bt active'><HiUsers /></button>
            <button className='decoration-none p-2 Icon rm-bt'><FaArrowTrendUp /></button>
        </div>
        <div className='p-2'>
        <Profile></Profile>
        </div>
      </Grid>
      <Grid xs={3} sx={{backgroundColor:"#efefef"}}>
        <ConversationBox></ConversationBox>
      </Grid>
      <Grid xs={5.4} className="bg-danger">
      <ChatBox/>
      </Grid>
      <Grid xs={3} className="cliendProfile">
        <ClientDetails/>
      </Grid>
      
    </Grid>
    </div>
  )
}

export default helpDeskDashboard
