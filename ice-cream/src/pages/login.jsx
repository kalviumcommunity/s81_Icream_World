import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    alert('Login Successful!');
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?icecream')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="z-10 w-full max-w-md p-8 bg-white bg-opacity-90 rounded-2xl shadow-xl backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center text-pink-600">Welcome Back! 🍦</h2>
        <p className="text-center text-gray-600">Login to continue exploring sweet flavors</p>
        
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="relative mb-4">
            <FaUser className="absolute left-3 top-3 text-pink-500" />
            <input 
              type="email" 
              className="w-full py-2 pl-10 pr-4 text-gray-700 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          
          <div className="relative mb-4">
            <FaLock className="absolute left-3 top-3 text-pink-500" />
            <input 
              type="password" 
              className="w-full py-2 pl-10 pr-4 text-gray-700 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full py-2 mt-4 font-semibold text-white bg-pink-500 rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400">
            Login
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-gray-600">Don't have an account? <a href="#" className="text-pink-500 hover:underline">Sign Up</a></p>
          <p className="text-gray-600">Forgot Password? <a href="#" className="text-pink-500 hover:underline">Reset</a></p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
