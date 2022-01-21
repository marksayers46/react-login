import React from 'react';
import { useRef, useState, useEffect } from 'react'

const Login = () => {
  
  return (
    <main className="login-box">
        <h1>Sign In</h1>
        <form className="form-container">
            <label>UserName:</label>
            <input></input>
            <label>Password:</label>
            <input></input>
        </form>
        <button>Sign In</button>

    </main>
  );
};

export default Login;
