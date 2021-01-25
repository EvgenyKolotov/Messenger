import React from 'react';
import { Route } from 'react-router-dom';

import './AuthPage.css';
import LoginForm from '../../modules/LoginFrom';
import RegisterForm from '../../modules/RegisterForm';

const AuthPage = () => (
  <section className="auth">
    <div className="auth-content">
      <Route exact path={['/', '/login']} component={LoginForm} />
      <Route exact path="/register" component={RegisterForm} />
    </div>
  </section>
);

export default AuthPage;
