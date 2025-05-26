import React, { useState } from 'react';
import AuthLayout from './components/AuthLayout/AuthLayout.js';
import AuthForms from './components/AuthForms/AuthForms.js';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AuthLayout>
      <AuthForms isLogin={isLogin} onToggle={() => setIsLogin(!isLogin)} />
    </AuthLayout>
  );
}

export default AuthPage;