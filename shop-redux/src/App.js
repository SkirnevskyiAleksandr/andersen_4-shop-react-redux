import './App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainWindow from './components/MainWindow/MainWindow';
import { LogIn } from './components/LogIn/LogIn';
import { SignUp } from './components/SignUp/SignUp';
import { connect, useDispatch } from 'react-redux';
import { usersListThunkCreator } from './index'


function App(props) {
  // const [listItem, setListItem] = useState([]);
  // const [item, setItem] = useState({});
  // const [basketListItems, setBasketItems] = useState([]);
  // const [counter, setCounter] = useState(1);
  // const [isLogInOpen, setIsLoginOpen] = useState(false);
  // const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  // const [user, setUser] = useState({});
  // const [users, setUsers] = useState([]);
  // const [logInInputs, setLogInInputs] = useState({});
  // const [userIsExist, setUserIsExist] = useState(true);
  // const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const logInInputsFun = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;

  //   setLogInInputs({ ...logInInputs, [name]: value });
  // };

  // const createUser = (event) => {
  //   const { name, value } = event.target;
  //   setUser({ ...user, [name]: value });
  // };

  // const createUserList = () => {
  //   setUsers([...users, user]);
  // };

  // const userData = (event) => {
  //   event.preventDefault();
  //   navigate('/');
  //   toggleIsSignUpOpen();

  //   if (event.target.innerText === 'SIGN OUT') {
  //     users.map((elem, index) => {
  //       if (
  //         elem.username === logInInputs.username &&
  //         elem.password === logInInputs.password
  //       ) {
  //         setUsers((users) => {
  //           users.splice(index, 1);
  //           setIsLogin(false);
  //           return users;
  //         });
  //       }
  //     });

  //     return;
  //   }

  //   createUserList();
  // };

  // const userValidator = (event) => {
  //   event.preventDefault();
  //   users.some((item) => {
  //     if (
  //       item.username === logInInputs.username &&
  //       item.password === logInInputs.password
  //     ) {
  //       setUserIsExist(true);
  //       toggleIsLoginOpen();
  //       setIsLogin(true);

  //       return;
  //     }

  //     setUserIsExist(false);
  //   });
  // };

  // const reTurnItem = (item) => {
  //   setItem(item);
  // };

  // const returnBasketListItems = (item, counter = 0) => {
  //   let tempArr = [];

  //   do {
  //     tempArr.push(item);
  //     counter--;
  //   } while (counter > 0);

  //   setBasketItems([...basketListItems, ...tempArr]);
  // };

  // const increaseCounter = () => {
  //   setCounter((counter) => {
  //     return counter + 1;
  //   });
  // };

  // const decreaseCounter = () => {
  //   if (counter > 1) {
  //     setCounter((counter) => {
  //       return counter - 1;
  //     });
  //   }
  // };

  useEffect(() => {
    props.addUser();
  }, []);

  // const toggleIsLoginOpen = () => {
  //   setIsSignUpOpen(false)
  //   setIsLoginOpen((isLogInOpen) => {
  //     setUserIsExist(true);
  //     return !isLogInOpen;
  //   });
  // };

  // const toggleIsSignUpOpen = () => {
  //   setIsLoginOpen(false)
  //   setIsSignUpOpen((isSignUpOpen) => {
  //     return !isSignUpOpen;
  //   });
  // };


  return (
    <>
      <MainWindow
      // listItem={listItem}
      // reTurnItem={reTurnItem}
      // currentItem={item}
      // returnBasketListItems={returnBasketListItems}
      // currentBasketListItems={basketListItems}
      // increaseCounter={increaseCounter}
      // decreaseCounter={decreaseCounter}
      // counter={counter}
      // toggleIsLoginOpen={toggleIsLoginOpen}
      // toggleIsSignUpOpen={toggleIsSignUpOpen}
      // isLogin={isLogin}
      />
      {
        props.isLogInOpen && (
          <LogIn
          // toggleIsLoginOpen={toggleIsLoginOpen}
          // userValidator={userValidator}
          // logInInputsFun={logInInputsFun}
          // logInInputs={logInInputs}
          // userIsExist={userIsExist}
          />
        )
      }
      {
        props.isSignUpOpen && (
          <SignUp
          // toggleIsSignUpOpen={toggleIsSignUpOpen}
          // userData={userData}
          // createUser={createUser}
          // user={user}
          // isLogin={isLogin}
          />
        )
      }
    </>
  );
}

function mapStateToProps(state) {
  return {
    someName: state.usersList,
    isLogInOpen: state.isLogInOpen

  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: () => { dispatch(usersListThunkCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
