import { useState } from 'react'
import axios from 'axios'
import styled, {keyframes} from 'styled-components';
import { bounce } from 'react-animations';
import confetti from 'canvas-confetti';

const BounceEffect = styled.div`
	animation: 2s ${keyframes`${bounce}`} infinite;
`;

const LoginForm = () => {

    // Confetti Animation
    let duration = 5 * 1000;
    let animationEnd = Date.now() + duration;
    let skew = 1;

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    // Confetti Animation
    (function frame() {
        let timeLeft = animationEnd - Date.now();
        let ticks = 20;
        skew = Math.max(0.8, skew - 0.001);
      
        confetti({
          particleCount: 1,
          startVelocity: 0,
          ticks: ticks,
          origin: {
            x: Math.random(),
            // since particles fall down, skew start toward the top
            y: (Math.random() * skew) - 0.2
          },
          colors: ['#ffffff'],
          shapes: ['circle'],
          gravity: randomInRange(0.4, 0.6),
          scalar: randomInRange(.2, .5),
          drift: randomInRange(-0.4, 0.4),
        });
      
        if (timeLeft > 0) {
          requestAnimationFrame(frame);
        }
      }());
    
    // Login Form stuff
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
                <BounceEffect><h1 className="title">Chat Application</h1></BounceEffect>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Login</span>
                        </button>
                    </div>
                    <h2 className="error" style={{color: 'orange'}}>{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;