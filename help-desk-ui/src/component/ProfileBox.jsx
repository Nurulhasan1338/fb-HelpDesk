import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import ProfilePic from "../assets/profile.png"
import Typography from '@mui/joy/Typography';
import { GoDotFill } from "react-icons/go";
import { LiaPhoneAltSolid } from "react-icons/lia";
import { IoMdContact } from "react-icons/io";

export default function BioCard() {
  return (
    <Card
      sx={{
        width: 320,
        maxWidth: '100%',
        borderRadius:0

      }}
    >
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Avatar src={ProfilePic} sx={{ '--Avatar-size': '4rem' }} />
    
        <Typography level="title-lg">Josephine Blanton</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
          <span className='text-success'><GoDotFill/></span> Online
        </Typography>
        
      </CardContent>
      <CardOverflow>
        <CardActions buttonFlex="1" className="d-flex justify-content-center align-items-center">
          
            <Button variant="outlined" sx={{padding:0}} color="neutral"><LiaPhoneAltSolid/> Call</Button>
            <Button variant="outlined" sx={{padding:0}} color="neutral"><IoMdContact/> Profile</Button>
    
        </CardActions>
      </CardOverflow>
    </Card>
  );
}