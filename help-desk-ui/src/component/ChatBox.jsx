import React,{useState,useEffect} from "react";
import "./comp.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBIcon,
} from "mdb-react-ui-kit";
import Avatar from '@mui/joy/Avatar';
import ProfilePic from "../assets/profile.png"
import MessageBox from "./Message";


export default function ChatBox() {

    const [msg,setMsg] = useState([]);

    const messages = [
        {
          messageContent: ["Hello there!"],
          profilePhoto: ProfilePic,
          sender: true,
          time: "2024-03-03T15:33:00"
        },
        {
          messageContent: ["Hi!", "How are you?"],
          profilePhoto: ProfilePic,
          sender: false,
          time: "2024-03-03T15:34:00"
        },
        {
          messageContent : ["I'm doing great", "thanks!"],
          profilePhoto : ProfilePic,
          sender : true,
          time : "2024-03-03T15:35:00"
        },
        {
          messageContent : ["That's good to hear!"],
          profilePhoto : ProfilePic,
          sender : false,
          time : "2024-03-03T15:36:00"
        }
      ];
      
      

      useEffect(()=>{
          setMsg(messages);
      },[])
      
     
      
      
  return (
    <MDBContainer className="outerBox" style={{ backgroundColor: "#eee" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="12" lg="12" xl="12">
          <MDBCard id="chat2" style={{ borderRadius: "0px" }}>
            <MDBCardHeader className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Nurul Hasan</h5>
            </MDBCardHeader>
         
              <MDBCardBody className="messageBody">
                {
                    msg.map((message,index)=>{
                        return (
                            <MessageBox key = {index} msg = {message}/>
                        )
                    })
                }

                <div className="divider d-flex align-items-center mb-4">
                  <p
                    className="text-center mx-3 mb-0"
                    style={{ color: "#a2aab7" }}
                  >
                    Today
                  </p>
                </div>

              </MDBCardBody>
         
            <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center footerBox">
            <Avatar alt="Nurul Hasan" src={ProfilePic} />
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Type message"
              ></input>
              <a className="ms-1 text-muted" href="#!">
                <MDBIcon fas icon="paperclip" />
              </a>
              <a className="ms-3" href="#!">
                <MDBIcon fas icon="paper-plane" />
              </a>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}