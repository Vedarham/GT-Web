import React, { useState } from 'react';
// import { Mail, Smartphone } from 'lucide-react';
import OTPVerification from './OTPVerification/OTPV.js';
import './ForgotPassword.style.css';

function ForgotPassword() {
  const [method, setMethod] = useState('email');
  const [step, setStep] = useState(1);
  const [contact, setContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="forgot-password-container">
      {step === 1 ? (
        <>
          <div className="header">
            <h2>Reset Password</h2>
            <p>Choose how you want to reset your password</p>
          </div>

          <div className="method-selector">
            <button
              onClick={() => setMethod('email')}
              className={`method-button ${method === 'email' ? 'active' : ''}`}
            >
              {/* <Mail className="method-icon" /> */}
              <span>Email</span>
            </button>
            <button
              onClick={() => setMethod('phone')}
              className={`method-button ${method === 'phone' ? 'active' : ''}`}
            >
              {/* <Smartphone className="method-icon" /> */}
              <span>Phone</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="reset-form">
            <div className="form-group">
              <label>
                {method === 'email' ? 'Email Address' : 'Phone Number'}
              </label>
              <input
                type={method === 'email' ? 'email' : 'tel'}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={method === 'email' ? 'Enter your email' : 'Enter your phone number'}
              />
            </div>
            <button type="submit" className="submit-button">
              Send Reset Instructions
            </button>
          </form>
        </>
      ) : (
        <OTPVerification
          phoneNumber={contact}
          onVerify={(otp) => console.log('OTP verified:', otp)}
          onResend={() => console.log('Resend OTP')}
        />
      )}
    </div>
  );
}
export default ForgotPassword