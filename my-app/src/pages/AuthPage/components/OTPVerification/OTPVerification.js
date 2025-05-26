import React, { useState, useEffect } from 'react';
// import { Timer } from 'lucide-react';
import './OTPVerification.style.css';

 function OTPVerification({ phoneNumber, onVerify, onResend }) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !canResend) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !canResend) {
      setCanResend(true);
    }
  }, [timeLeft, canResend]);

  const handleResend = () => {
    setTimeLeft(30);
    setCanResend(false);
    onResend();
  };

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-message">
        <p>Enter the verification code sent to {phoneNumber}</p>
      </div>

      <div className="otp-input-group">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            className="otp-input"
          />
        ))}
      </div>

      <div className="otp-timer">
        <div className="timer-text">
          {/* <Timer className="timer-icon" /> */}
          {timeLeft > 0 ? `Resend in ${timeLeft}s` : ''}
        </div>
        <button
          onClick={handleResend}
          disabled={!canResend}
          className={`resend-button ${!canResend ? 'disabled' : ''}`}
        >
          Resend OTP
        </button>
      </div>

      <button
        onClick={() => onVerify(otp.join(''))}
        className="verify-button"
      >
        Verify OTP
      </button>
    </div>
  );
}

export default OTPVerification