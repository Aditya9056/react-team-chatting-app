import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const chatId = activeChat;
    const authObject = {
        'Project-ID': 'c8f3b689-8e0f-48a5-8e72-f3e0388e7c4d',
        'User-Name': 'Skylar',
        'User-Secret': 'password123',
    };

    const renderReadReceipts = (message, isMyMessage) =>{
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div 
                key={`read_${index}`}
                className="read-receipt"
                style={{
                    float: isMyMessage ? 'right' : 'left',
                    backgroundImage: `url(${person?.person?.avatar})`
                }}
            />
        ))
    }
    
    const renderMessages = () => {
        const keys = Object.keys(messages);
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null :keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{width: '100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage 
                            ? <MyMessage message={message} /> 
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} /> 
                        
                        }
                        <audio className="audio-element">
                            <source src={"./message.mp3"}></source>
                        </audio> 
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>

                </div>
            )
        
        })
    }

    renderMessages();

    if(!chat) return 'Loading ...';
    
    return (

    <div className="chat-feed">
        <SimpleBar style={{ height: '100vh' }}>
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-sub-title">{chat.people.map((person)=> `${person.person.username}`)}</div>
            </div>
            {renderMessages()}
            <div style={{height:'100px'}} />

        </SimpleBar>

        <div className="message-form-container">
            <MessageForm { ... props } chatId={activeChat} />
        </div>
    </div>
    )
}

export default ChatFeed;