import React from 'react';
import mainWindowStyles from './MainWindow.module.css';
import ListItem from '../ListItem/ListItem';
import { Routes, Route, NavLink } from 'react-router-dom';
import { AboutUs } from '../About_us/AboutUs';
import Basket from '../../assets/basket.svg';
import Item from '../Item/Item';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { connect } from "react-redux";


const MainWindow = (props) => {
  return (
    <>
      <header>
        <div className={mainWindowStyles.online_shop}>online shop</div>
        <nav className={mainWindowStyles.online_shop_nav}>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about-us"> ABOUT US</NavLink>
          <div className={mainWindowStyles.btnWrapper}>
            <button
              onClick={props.toggleLoginModal}
              className={`${mainWindowStyles.online_shop_nav} ${mainWindowStyles.btn}`}
            >
              Log in
            </button>
            <button
              onClick={props.toggleSignUpModal}
              className={`${mainWindowStyles.online_shop_nav} ${mainWindowStyles.btn}`}
            >
              {!props.isLogin ? 'Sign up' : 'Sign out'}
            </button>
          </div>
          {props.isLogin ? (
            <div>
              <button className={mainWindowStyles.basketWrapper}>
                <img src={Basket} alt="basket" />
              </button>
              <div className={mainWindowStyles.items}>
                items:{props.basketListItems.length}/sum:
                {props.totalPrice}$
              </div>
            </div>
          ) : (
            <div className={mainWindowStyles.shouldBy}>
              To buy smth you should Log in
            </div>
          )}
        </nav>
      </header>
      <section className={mainWindowStyles.listItem}>
        <Routes>
          <Route
            path="/"
            element={
              <ListItem />
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/item/:id"
            element={
              <Item />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </section>
    </>
  );
};

function mapStateToProps(state) {
  return {
    usersList: state.usersList,
    basketListItems: state.basketListItems,
    currentStuff: state.item,
    totalPrice: state.totalPrice,
    isLogin: state.isLogin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleLoginModal: () => {
      dispatch({
        type: 'IS_LOG_IN'
      })
    },
    toggleSignUpModal: (event) => {
      dispatch({ type: 'IS_SIGN_UP_MODAL' })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainWindow)
