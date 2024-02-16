import React from 'react'
import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';

const Integratedpage = (props) => {

  const nevigate = useNavigate();

  const DeleteConnection = () =>{
    props.setConnection(false)
  }
  const gotoDashboard = () =>{
    nevigate("/dashboard")
  }
  return (
    <div>
    <label>Integrated Page :</label> <strong>{props.page.name}</strong>
    <label>Integrated Page id :</label> <strong>{props.page.id}</strong>
    <Button variant="solid" color="danger" onClick={DeleteConnection} className="w-100 my-2">Delete Integration </Button>
    <Button variant="solid" color="primary" onClick={gotoDashboard} className="w-100 my-1">Reply to Messages</Button>
    </div>
  )
}

export default Integratedpage;
