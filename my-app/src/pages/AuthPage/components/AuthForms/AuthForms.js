import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// import { CiLock } from "react-icons/ci";
// import { FiMapPin } from "react-icons/fi";
import AuthTabs from '../AuthTabs/AuthTabs.js';
import PromoHeader from '../PromoHeader/PromoHeader.js';
import OTPInput from '../OTPInput/OTPInput.js';
import SuccessScreen from '../SuccessScreen/SuccessScreen.js';
import LocationSelect from '../LocationSelect/LocationSelect.js';
import './AuthForms.style.css';
import { useNavigate } from 'react-router-dom'
import { FaRegEye, FaEyeSlash, FaRegUser } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

function AuthForms({ isLogin, onToggle }) {
   let navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [useOTP, setUseOTP] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/auth/${isLogin ? 'login' : 'signup'}`,
        data
      );
      console.log('Response:', response);
      setFormData(data); 
      setShowSuccess(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (showSuccess) {
    return (
      <SuccessScreen
        type={isLogin ? 'login' : 'signup'}
        username={formData.name || 'Gamer'}
        onContinue={() => navigate('/profile')}
      />
    );
  }

  return (
    <div className="auth-forms">
      <AuthTabs isLogin={isLogin} onToggle={onToggle} />
      <PromoHeader />

      {useOTP && isLogin ? (
        <OTPInput onSubmit={(otp) => console.log('OTP:', otp)} />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="l-form">
          {!isLogin && (
            <div className="form-grp">
              <label>Full Name</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  {...register('fullname', { required: 'Name is required' })}
                  placeholder="Enter your full name"
                />
                <FaRegUser className="input-icon" />
              </div>
              {errors.fullname && <p className="error">{errors.name.message}</p>}
            </div>
          )}

          <div className="form-grp">
            <label>Email</label>
            <div className="input-wrapper">
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                placeholder="Enter your email"
              />
              <IoMdMail className="input-icon" />
            </div>
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-grp">
            <label>Username</label>
            <div className="input-wrapper">
              <input
                type="text"
                {...register('username', { required: 'username is required' })}
                placeholder="Enter your username"
              />
              <IoMdMail className="input-icon" />
            </div>
            {errors.username && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-grp">
            <label>Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password', { required: 'Password is required' })}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? <FaEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          {!isLogin && (
            <>
              <LocationSelect
                onStateChange={(state) => setValue('state', state)}
                onDistrictChange={(district) => setValue('district', district)}
              />

              <div className="form-grp">
                <label>Referral Code (Optional)</label>
                <input
                  type="text"
                  {...register('referralCode')}
                  placeholder="Enter referral code"
                  className="referral-input"
                />
              </div>
            </>
          )}

          <button type="submit" className="submit-button">
            {isLogin ? 'Login' : 'Create Account'}
          </button>

          {isLogin && (
            <div className="login-options">
              <button
                type="button"
                onClick={() => setUseOTP(!useOTP)}
                className="text-button"
              >
                {useOTP ? 'Use Password Instead' : 'Login with OTP'}
              </button>
              <button type="button" className="text-button">
                Forgot your password?
              </button>
            </div>
          )}
        </form>
      )}

      <div className="social-login">
        <div className="divider">
          <span>Or continue with</span>
        </div>

        <div className="social-buttons">
          <button className="social-button">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google logo"
              className="social-icon"
            />
            <span>Google</span>
          </button>
          <button className="social-button">
            <img
              src="https://www.svgrepo.com/show/475631/apple-color.svg"
              alt="Apple logo"
              className="social-icon"
            />
            <span>Apple</span>
          </button>
        </div>
      </div>

      <p className="toggle-mode">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button type="button" onClick={onToggle} className="toggle-button">
          {isLogin ? 'Sign up' : 'Login'}
        </button>
      </p>
    </div>
  );
}


export default AuthForms