const initialState = {
  usersList: [],
  item: {},
  basketListItems: [],
  counter: 0,
  isLogInOpen: false,
  isSignUpOpen: false,
  logInInputs: {
    username: '',
    password: ''
  },
  user: {
    username: '',
    email: '',
    password: ''
  },
  users: [],
  userIsExist: true,
  isLogin: false,
  totalPrice: 0,
  usernameInputValue: "",
}

export const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_USER':
      return { ...state, usersList: action.usersList };

    case 'GET_USERS_LIST_FROM_API':
      return {
        ...state, usersList: action.usersList
      }

    case 'RETURN_ITEM':
      return {
        ...state, item: action.currentItem
      }

    case 'DECREASE_COUNTER':
      if (state.counter !== 0) {
        return {
          ...state, counter: state.counter - 1
        }
      } else {
        return {
          ...state, counter: 0
        }
      }

    case 'INCREASE_COUNTER':
      return {
        ...state, counter: state.counter + 1
      }

    case 'ADD_STUFFS_TO_BASKET':
      const currentArray = [];
      let currentCounter = state.counter;
      let price = 0;

      while (currentCounter > 0) {
        currentArray.push(state.item);
        currentCounter--;
      }
      currentArray.map((item) => {
        price += item.price
      })

      return {
        ...state,
        counter: 0,
        basketListItems: [...state.basketListItems, ...currentArray],
        totalPrice: state.totalPrice + price

      }

    case 'ADD_TO_BASKET_SINGLE_STUFF':
      return {
        ...state,
        basketListItems: [...state.basketListItems, action.currentItem],
        totalPrice: state.totalPrice + action.currentItem.price
      }

    case 'IS_LOG_IN':
      return {
        ...state, isSignUpOpen: false,
        userIsExist: true,
        isLogInOpen: !state.isLogInOpen
      }

    case 'IS_SIGN_UP_MODAL':
      return {
        ...state,
        isLogInOpen: false,
        isSignUpOpen: !state.isSignUpOpen
      }

    case 'CREATE_SIGN_IN_USER':        //создаем пользователя для регистрации
      if (action.name === 'username') {
        return {
          ...state,
          user: {
            ...state.user,
            username: action.value
          }
        }
      }
      if (action.name === 'email') {
        return {
          ...state,
          user: {
            ...state.user,
            email: action.value
          }
        }
      }
      if (action.name === 'password') {
        return {
          ...state,
          user: {
            ...state.user,
            password: action.value
          }
        }
      }
      return {
        ...state
      }

    case 'CANCEL_SIGN_UP':   // очищаем поля пользователя для регистрации
      return {
        ...state, user: {}
      }

    case 'SIGN_OUT':          //удаляем user из списка зарегестрированных юзеров
      const tempObj = {
        ...state
      };

      state.users.map((elem, index) => {
        if (
          elem.username === state.user.username &&
          elem.password === state.user.password
        ) {
          tempObj.users = state.users.splice(index, 1)
          tempObj.isLogin = false
          tempObj.isSignUpOpen = false
          return;
        }
      })

      return tempObj;

    case 'SIGN_UP':
      return {
        ...state,
        isSignUpOpen: false,
        users: [...state.users, state.user]
      }

    case 'LOG_IN_INPUTS':
      if (action.name === 'username') {
        return {
          ...state,
          logInInputs: { ...state.logInInputs, username: action.value }
        }
      }
      if (action.name === 'password') {
        return {
          ...state,
          logInInputs: { ...state.logInInputs, password: action.value }
        }
      }
      return {
        ...state
      }

    case 'CHECK_LOG_IN':
      const obj = {
        ...state
      };

      state.users.some((item) => {
        if (
          item.username === state.logInInputs.username &&
          item.password === state.logInInputs.password
        ) {
          console.log(`log in user exist`)
          obj.userIsExist = true
          obj.isLogInOpen = false
          obj.isLogin = true
          return;
        }
        console.log(`log in user not exist`)
        obj.userIsExist = false
        return;
      })
      return obj

    default:
      return state;
  }
}
