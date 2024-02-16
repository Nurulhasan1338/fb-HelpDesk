import React from 'react'
import OAuth2Login from 'react-simple-oauth2-login';
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Appinfo from '../../config';
import "./comp.css"
const SigninWithFacebook = () => {

    const nevigate = useNavigate();


const onSuccess = (response) => {
    localStorage.setItem("access-token",response.access_token);
    console.log(response.access_token);
    nevigate("/pageIntegrate");

}
const onFailure = (response) => {
    alert("login with facebook faild!",response);
}
const buttenText = <label>CONTINUE WITH <FaFacebook/></label>

  return (
    <div >
    <OAuth2Login
    buttonText= {buttenText} 
    className='facebook-Btn'
    authorizationUrl="https://www.facebook.com/dialog/oauth"
    responseType="token"
    clientId={Appinfo.appId}
    redirectUri={Appinfo.reDirectUrl}
    onSuccess={onSuccess}
    onFailure={onFailure}/>

    </div>
  )
}

export default SigninWithFacebook
