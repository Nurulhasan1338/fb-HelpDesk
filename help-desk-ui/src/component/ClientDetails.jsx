import React from 'react'
import ProfileBox from "./ProfileBox";

const ClientDetails = () => {
  return (
    <div className='p-0'>
      <ProfileBox></ProfileBox>
      <div className='m-2 p-3 rounded border bg-light' >
      
        <div className='row'>
            <div className='col-12 fw-bolder'>
                Customer Deatails
            </div>
        </div>
        <div className='row row-cols-2 small'>
            <div className='col'>
                Email
            </div>
            <div className='col text-end fw-bold'>
                adf@gamil.com
            </div>
            <div className='col'>
                First Name
            </div>
            <div className='col text-end fw-bold'>
                Nurul
            </div>
            <div className='col text-normal'>
                Last Name
            </div>
            <div className='col text-end fw-bold'>
                Hasan
            </div>
        </div>
        <div className='row'>
            <div className="col">
                <button className='rm-bt text-primary bg-transparent small p-0 m-0'> View more details </button>
            </div>
        </div>
        
      </div>

    </div>
  )
}

export default ClientDetails
