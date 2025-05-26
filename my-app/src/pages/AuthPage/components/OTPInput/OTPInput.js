import React, { useState } from 'react';
import './OTPInput.style.css';

function OTPInput({ onSubmit }) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);

  React.useEffect(() => {
    if (timeLeft > 0 && !canResend) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !canResend) {
      setCanResend(true);
    }
  }, [timeLeft, canResend]);

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

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleResend = () => {
    setTimeLeft(30);
    setCanResend(false);
    // Add your resend OTP logic here
  };

  return (
    <div className="otp-container">
      <div className="otp-message">
        <p>Enter the verification code sent to your device</p>
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
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otp-input"
          />
        ))}
      </div>

      <div className="otp-timer">
        <span className="timer-text">
          {timeLeft > 0 ? `Resend code in ${timeLeft}s` : ''}
        </span>
        <button
          onClick={handleResend}
          disabled={!canResend}
          className={`resend-button ${!canResend ? 'disabled' : ''}`}
        >
          Resend OTP
        </button>
      </div>

      <button
        onClick={() => onSubmit(otp.join(''))}
        className="verify-button"
      >
        Verify OTP
      </button>
    </div>
  );
}

export default OTPInput