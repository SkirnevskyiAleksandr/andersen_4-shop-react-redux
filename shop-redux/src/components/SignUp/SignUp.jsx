import React from 'react';
import ReactDOM from 'react-dom';
import SignUpStyle from './SignUp.module.css';

export const SignUp = (props) => {
  const {
    toggleIsSignUpOpen,
    userData,
    createUser,
    user,
    isLogin
  } = props;

  return ReactDOM.createPortal(
    <div div className={`${SignUpStyle.loginPage} ${SignUpStyle.mainWrapper}`}>
      <div className={SignUpStyle.form}>
        <form action='#' className={SignUpStyle.loginForm}>
          <input onChange={createUser}
            name='username'
            type="text"
            placeholder="username"
            value={user.username}
          />
          <input onChange={createUser}
            name='email'
            type="email"
            placeholder="email"
            value={user.email}
          />
          <input onChange={createUser}
            name='password'
            type="password"
            placeholder="password"
            value={user.password}
          />
          <button onClick={userData} type='submit'>{isLogin ? 'Sign out' : 'Sign up'}</button>
          <button type='button' onClick={toggleIsSignUpOpen}>Cancel</button>
        </form>
        <biv onClick={toggleIsSignUpOpen} className={SignUpStyle.closeButton}>X</biv>
      </div>
    </div >, document.getElementById('logIn')
  );
}
