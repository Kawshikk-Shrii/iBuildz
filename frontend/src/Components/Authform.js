import React, { useState } from 'react';
import axios from './axios';
import { useNavigate } from 'react-router-dom';
import './Authform.css';

const Authform = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

    const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isLogin ? '/auth/login' : '/auth/register';
      const payload = isLogin
        ? { email, password }
        : { fullName: fullname, email, password, primaryRole: 'client' };

      const response = await axios.post(url, payload);

      if (isLogin) {
        localStorage.setItem('token', response.data.token);
        alert('Login successful!');
        Navigate('/home'); 
      } else {
        alert('Registration successful! Please login.');
        setIsLogin(true);
      }
    } catch (err) {
      console.error(err.message);
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="authform-root">
      <div className="form-container">
        <div className="form-toggle">
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>SignUp</button>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <h2>{isLogin ? 'Login Form' : 'SignUp Form'}</h2>

          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">{isLogin ? 'Login' : 'SignUp'}</button>

          {isLogin && <a href="#">Forgot Password?</a>}

          {error && <p className="error">{error}</p>}

          <p>
            {isLogin ? 'Not a Member?' : 'Already have an account?'}{' '}
            <a onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer' }}>
              {isLogin ? 'SignUp now' : 'Login'}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Authform;