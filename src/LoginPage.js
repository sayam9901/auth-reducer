
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authSlice';

function LoginPage() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You should validate the username and password here
    const user = { username, password };

    // Simulate a login (replace with actual authentication logic)
    if (user.username === 'demo' && user.password === 'password') {
      dispatch(login(user));
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default LoginPage;
