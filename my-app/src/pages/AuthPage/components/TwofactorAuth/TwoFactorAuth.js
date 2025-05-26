import React, { useState } from 'react';
// import { Mail, Smartphone } from 'lucide-react';
import OTPVerification from './OTPVerification/OTPV.js';
import './TwoFactorAuth.style.css';

 function TwoFactorAuth({ email, phone, onVerified }) {
  const [method, setMethod] = useState('email');
  const [showOTP, setShowOTP] = useState(false);

  const handleMethodSelect = (selected) => {
    setMethod(selected);
    setShowOTP(true);
  };

  return (
    <div className="two-factor-auth">
      {!showOTP ? (
        <>
          <div className="header">
            <h2>Two-Factor Authentication</h2>
            <p>Choose your verification method</p>
          </div>

          <div className="method-grid">
            <button
              onClick={() => handleMethodSelect('email')}
              className="method-button"
            >
              {/* <Mail className="method-icon" /> */}
              <div className="method-info">
                <div className="method-label">Email</div>
                <div className="method-value">{email}</div>
              </div>
            </button>

            <button
              onClick={() => handleMethodSelect('sms')}
              className="method-button"
            >
              {/* <Smartphone className="method-icon" /> */}
              <div className="method-info">
                <div className="method-label">SMS</div>
                <div className="method-value">{phone}</div>
              </div>
            </button>
          </div>
        </>
      ) : (
        <OTPVerification
          phoneNumber={method === 'email' ? email : phone}
          onVerify={(otp) => {
            console.log('2FA OTP verified:', otp);
            onVerified();
          }}
          onResend={() => console.log('Resend 2FA code')}
        />
      )}
    </div>
  );
}

export default TwoFactorAuth