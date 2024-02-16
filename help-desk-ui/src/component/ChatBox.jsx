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
    const [typeMsg,setType]  = useState("");

    const handlemsg=(e)=>{
      
      setType(e.target.value);
    }
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


      function splitIntoChunks(str, chunkSize) {
        const words = str.split(" ");
        const chunks = [];
        
        let currentChunk = [];
        for (const word of words) {
            currentChunk.push(word);
            if (currentChunk.length >= chunkSize) {
                chunks.push(currentChunk.join(" "));
                currentChunk = [];
            }
        }
        
        if (currentChunk.length > 0) {
            chunks.push(currentChunk.join(" "));
        }
        
        return chunks;
    }
    

      useEffect(()=>{
          setMsg(messages);
      },[])


      const handleSubmit=async()=>{

        let message_array = splitIntoChunks(typeMsg,7);
        setType("");

        const new_msg = {
          messageContent : message_array,
          profilePhoto:ProfilePic,
          sender:true,
          time:new Date()
        }

        const msgList = [...msg,new_msg]
        setMsg(msgList);
      }
      
     
      
      
  return (
    <MDBContainer className="outerBox" style={{ backgroundColor: "#eee" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="12" lg="12" xl="12" className="p-0">
          <MDBCard id="chat2"  className="addedToCard" style={{ borderRadius: "0px" }}>
            <MDBCardHeader className="d-flex justify-content-between align-items-center chatHeader">
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


              </MDBCardBody>
         
            <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center footerBox">
            <Avatar alt="Nurul Hasan" src={ProfilePic} />
              
              <input
                type="text"
                value={typeMsg}
                onChange={handlemsg}
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Type message"
              ></input>
              <a className="ms-1 text-muted" href="#!">
                <MDBIcon fas icon="paperclip" />
              </a>
              <button className="ms-3 bg-transparent rm-bt" onClick={handleSubmit}>
                <MDBIcon fas icon="paper-plane" />
              </button>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}