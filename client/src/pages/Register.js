import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import '../style/style.css'; // You'll create this CSS file


export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/register', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.msg || 'Register failed');
    }
  };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape1"></div>

      <form onSubmit={handleSubmit}>
        <h3>Register Here</h3>

        <label htmlFor="username">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          id="username"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
          <div className='bott'>if you have account <a href='/login'>Login</a></div>
      </form>
    </div>
  );
}
