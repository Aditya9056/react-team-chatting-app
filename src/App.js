import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import { CHAT_ENGINE_PROJECT_ID } from './config/chatEngine';
import './App.css';

const App = () => {
	if (!localStorage.getItem('username')) {
		return <LoginForm />;
	}

	return (
		<ChatEngine
			height='100vh'
			projectID={CHAT_ENGINE_PROJECT_ID}
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			onNewMessage={() =>
				document.getElementsByClassName('audio-element')[0].play()
			}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
};

export default App;
