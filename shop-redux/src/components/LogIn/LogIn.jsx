import React from 'react';
import ReactDOM from 'react-dom';
import LogInStyle from './LogIn.module.css';
import { connect } from 'react-redux/es/exports';

const LogIn = (props) => {
  return ReactDOM.createPortal(
    <div className={`${LogInStyle.loginPage} ${LogInStyle.mainWrapper}`}>
      <div className={LogInStyle.form}>
        <form action="#" className={LogInStyle.loginForm}>
          <input
            onChange={props.logInInputsValue}
            name="username"
            type="text"
            placeholder="username"
            value={props.logInInputs.username}
          />
          <input
            onChange={props.logInInputsValue}
            name="password"
            type="password"
            placeholder="password"
            value={props.logInInputs.password}
          />
          <button onClick={props.checkLogInUser} type="submit">
            login
          </button>
          <button type="button" onClick={props.toggleLoginModal}>
            Cancel
          </button>
          <p className={LogInStyle.message}>
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
        <div onClick={props.toggleLoginModal} className={LogInStyle.closeButton}>
          X
        </div>
        <div>{!props.userIsExist && 'user is not found'}</div>
      </div>
    </div>,
    document.getElementById('logIn')
  );
};

function mapStateToProps(state) {
  return {
    userIsExist: state.userIsExist,
    logInInputs: state.logInInputs,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleLoginModal: () => {
      dispatch({
        type: 'IS_LOG_IN'
      })
    },
    logInInputsValue: (event) => {
      const { name, value } = event.target;
      dispatch({
        type: 'LOG_IN_INPUTS',
        name: name,
        value: value
      })
    },
    checkLogInUser: (event) => {
      event.preventDefault();
      dispatch({ type: 'CHECK_LOG_IN', event: event })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)