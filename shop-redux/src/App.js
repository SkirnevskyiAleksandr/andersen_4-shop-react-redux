import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainWindow from './components/MainWindow/MainWindow';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import { connect } from 'react-redux';
import { usersListThunkCreator } from './index'


function App(props) {
  // const navigate = useNavigate();

  useEffect(() => {
    props.addUser();
  }, []);

  return (
    <>
      <MainWindow />
      {props.isLogInOpen && <LogIn />}
      {props.isSignUpOpen && <SignUp />}
    </>
  );
}

function mapStateToProps(state) {
  return {
    someName: state.usersList,
    isLogInOpen: state.isLogInOpen,
    isSignUpOpen: state.isSignUpOpen

  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: () => { dispatch(usersListThunkCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
