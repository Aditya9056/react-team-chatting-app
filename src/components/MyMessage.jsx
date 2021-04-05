const MyMessage = ({message}) => {
    if(message?.attachments?.length > 0) {
        console.log('Hello');
        return (
            <img
            src = {message.attachments[0].file}
            alt = "message-attachement"
            className = "message-image"
            style = {{ float:'right' }}
            />
        )
    }
    console.log('Message is ', message, '\n');

    console.log('Length is ', message?.attachements?.length);
    return (
        <div className="message" style={{float:'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50'}}>
            {message.text}          
        </div>
    );
}

export default MyMessage;