import React from 'react'
import Avatar from '@mui/joy/Avatar';
const Message = (props) => {

    const { messageContent, sender, profilePhoto, time } = props.msg;

    const gettime = (Time) => {
        const dateTimeString = Time;
        const dateTime = new Date(dateTimeString);

        // Get hours and minutes
        const hours = dateTime.getHours();
        const minutes = dateTime.getMinutes();

        // Format the time
        const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
        return timeString;
    }

    return (
        <div className={`d-flex flex-row justify-content-${sender ? "end" : "start"}`}>
            {
                !sender && <Avatar alt="Nurul Hasan" src={profilePhoto} />
            }

            <div className='me-3'>
                {
                    messageContent.map((messageitem, key) => {
                        return (
                            <p
                                key={key}
                                className="small p-2 ms-3 mb-1 rounded-3"
                                style={{ backgroundColor: "#f5f6f7" }}>
                                {messageitem}
                            </p>
                        )
                    })
                }


                <p className={`small ms-3 mb-3 rounded-3 text-muted ${sender?"text-end":""}`}>
                    {gettime(time)}
                </p>

            </div>
            {
                sender && <Avatar alt="Nurul Hasan" src={profilePhoto} />
            }
        </div>
    )
}

export default Message
