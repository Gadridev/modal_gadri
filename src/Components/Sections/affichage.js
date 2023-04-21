import React from 'react'
import LoginForm from './login';
import  { useState } from 'react';
function Affichage() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const handleLoginClick = () => {
      setShowLoginForm(true);
    };
  
    const handleLoginFormClose = () => {
      setShowLoginForm(false);
    };
  
    return (
      <div>
    
        <button onClick={handleLoginClick}>Log In</button>
        {showLoginForm && <LoginForm onClose={handleLoginFormClose} />}
      </div>
    );
}

export default Affichage
