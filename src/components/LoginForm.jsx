import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        //username || password => chatengine -> give messages -> works out LoggedIn else try with new creds
        const authObject = {'Project-ID': 'c8f3b689-8e0f-48a5-8e72-f3e0388e7c4d', 'User-Name': username, 'User-Secret': password};
    
        try{
            await axios.get('https://api.chatengine.io/chats/', {headers: authObject});
            
            //LoggedIn
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            
            window.location.reload();
        }catch(err){
            setError('Oops, incorrect credentials.');
        }
    };

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error" style={{color: 'orange'}}>{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;