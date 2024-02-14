import React from 'react'
import Button from '@mui/joy/Button';

const Integratedpage = (props) => {

  const DeleteConnection = () =>{
    props.setConnection(false)
  }
  return (
    <div>
    <label>Integrated Page :</label> <strong>{props.page.name}</strong>
    <label>Integrated Page id :</label> <strong>{props.page.id}</strong>
    <Button variant="solid" color="danger" onClick={DeleteConnection} className="w-100 my-2">Delete Integration </Button>
    <Button variant="solid" color="primary" className="w-100 my-1">Reply to Messages</Button>
    </div>
  )
}

export default Integratedpage;
