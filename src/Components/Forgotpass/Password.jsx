import React from 'react'
import { useState } from 'react';
import './Password.css'
import { useNavigate } from 'react-router';
const Password = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [codeSent, setCodeSent] = useState(false);

    const handleSendCode = (event) => {
        event.preventDefault();
        // Add logic to send verification code to the provided email
        setCodeSent(true);
    };

    const handleVerifyCode = (event) => {
        event.preventDefault();
        // Add logic to verify the code
        if (verificationCode === '123456') { // Replace with actual verification logic
            navigate('/reset-password'); // Navigate to reset password page after verification
        } else {
            alert('Invalid verification code');
        }
    }
  return (
    <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            {!codeSent ? (
                <form onSubmit={handleSendCode}>
                    <div className="input-container">
                        <label>Email</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="send-code-button">Send Verification Code</button>
                </form>
            ) : (
                <form onSubmit={handleVerifyCode}>
                    <div className="input-container">
                        <label>Verification Code</label>
                        <input 
                            type="text" 
                            value={verificationCode} 
                            onChange={(e) => setVerificationCode(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="verify-code-button">Verify Code</button>
                </form>
            )}
        </div>
  )
}

export default Password;