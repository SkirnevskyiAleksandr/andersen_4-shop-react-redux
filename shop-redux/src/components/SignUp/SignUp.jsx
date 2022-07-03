import React from 'react';
import ReactDOM from 'react-dom';
import SignUpStyle from './SignUp.module.css';
import { connect } from 'react-redux/es/exports';

const SignUp = (props) => {
  return ReactDOM.createPortal(
    <div div className={`${SignUpStyle.loginPage} ${SignUpStyle.mainWrapper}`}>
      <div className={SignUpStyle.form}>
        <form action='#' className={SignUpStyle.loginForm}>
          <input onChange={props.createUser}
            name='username'
            type="text"
            placeholder="username"
            value={props.userInputValue.username}
          />
          <input onChange={props.createUser}
            name='email'
            type="email"
            placeholder="email"
            value={props.userInputValue.email}
          />
          <input onChange={props.createUser}
            name='password'
            type="password"
            placeholder="password"
            value={props.userInputValue.password}
          />
          <button onClick={props.signUpOut} type='submit'>{props.isLogin ? 'Sign out' : 'Sign up'}</button>
          <button type='button' onClick={props.cancelSignIN}>Cancel</button>
        </form>
        <div onClick={props.cancelSignIN} className={SignUpStyle.closeButton}>X</div>
      </div>
    </div >, document.getElementById('logIn')
  );
}

function mapStateToProps(state) {
  return {
    userInputValue: state.user,
    userAlreadyExist: state.userAlreadyExist,
    isLogin: state.isLogin
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    toggleSignUpModal: () => {
      dispatch({ type: 'IS_SIGN_UP' })
    },
    createUser: (event) => {
      const { name, value } = event.target;
      dispatch({
        type: 'CREATE_SIGN_IN_USER',
        name: name,
        value: value
      })
    },
    cancelSignIN: () => {
      dispatch({ type: 'IS_SIGN_UP' })
      dispatch({ type: 'CANCEL_SIGN_UP' })
    },
    signUpOut: (event) => {
      event.preventDefault();
      if (event.target.innerText === 'SIGN OUT') {
        return dispatch({ type: 'SIGN_OUT', event: event });
      }
      return dispatch({ type: 'SIGN_UP' });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
