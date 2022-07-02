const initialState = {
  usersList: [],
  item: {},
  basketListItems: [],
  counter: 0,
  isLogInOpen: false,
  isSignUpOpen: false,
  user: {},
  users: {},
  logInInputs: [],
  userIsExist: true,
  isLogin: true,
  totalPrice: 0
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

      while (currentCounter > 0) {
        currentArray.push(state.item);
        currentCounter--;
      }

      // state.basketListItems.map((item) => {
      //   state.totalPrice += item.price;
      // })

      return {
        ...state,
        counter: 0,
        basketListItems: [...state.basketListItems, ...currentArray],

      }
    case 'ADD_TO_BASKET_SINGLE_STUFF':
      return {
        ...state, basketListItems: [...state.basketListItems, state.item]
      }
    case 'IS_LOG_IN':
      return {
        ...state, isSignUpOpen: false,
        userIsExist: true,
        isLogInOpen: !state.isLogInOpen
      }
    default:
      return state;
  }
}
