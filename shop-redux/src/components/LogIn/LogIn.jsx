import React from 'react';
import ReactDOM from 'react-dom';
import LogInStyle from './LogIn.module.css';

export const LogIn = ({
  toggleIsLoginOpen,
  userValidator,
  logInInputsFun,
  logInInputs,
  userIsExist,
}) => {
  return ReactDOM.createPortal(
    <div className={`${LogInStyle.loginPage} ${LogInStyle.mainWrapper}`}>
      <div className={LogInStyle.form}>
        <form action="#" className={LogInStyle.loginForm}>
          <input
            onChange={logInInputsFun}
            name="username"
            type="text"
            placeholder="username"
          // value={logInInputs.name}
          />
          <input
            onChange={logInInputsFun}
            name="password"
            type="password"
            placeholder="password"
          // value={logInInputs.name}
          />
          <button onClick={userValidator} type="submit">
            login
          </button>
          <button type="button" onClick={toggleIsLoginOpen}>
            Cancel
          </button>
          <p className={LogInStyle.message}>
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
        <div onClick={toggleIsLoginOpen} className={LogInStyle.closeButton}>
          X
        </div>
        <div>{!userIsExist && 'user is not found'}</div>
      </div>
    </div>,
    document.getElementById('logIn')
  );
};
