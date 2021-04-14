import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
// import { ChatList } from 'react-chat-engine';
// import { ChatCard } from 'react-chat-engine';

const someList = (props) => {

    console.log(ChatList)
    console.log(ChatCard)

    const renderChatList = () => {
        console.log()
    }
    return (

        <div className="ce-chats-container">
            <SimpleBar style={{ height: '100vh' }}>
                <div class='ce-chat-list'>
                    Hey
                </div>
            </SimpleBar>
        </div>
        )
}

export default someList;