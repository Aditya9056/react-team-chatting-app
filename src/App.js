import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
	if (!localStorage.getItem('username')) {
		return <LoginForm />;
	}

	return (
		<ChatEngine
			height='100vh'
			projectID='c8f3b689-8e0f-48a5-8e72-f3e0388e7c4d'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			onNewMessage={() => (
				<audio className='audio-element'>
					<source src='https://proxy.notificationsounds.com/message-tones/take-this-313/download/file-sounds-809-take-this.mp3'></source>
				</audio>
			)}
			onConnect={() => (
				<audio className='audio-element'>
					<source src='https://proxy.notificationsounds.com/message-tones/take-this-313/download/file-sounds-809-take-this.mp3'></source>
				</audio>
			)}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
};

export default App;
