import React from 'react';
import basket from '../../assets/add_to_basket.svg';
import itemStyle from './Item.module.css';
import { connect } from "react-redux";


// const addStuffToBasketList = (item, counter = 0) => {
//   let tempArr = [];

//   do {
//     tempArr.push(item);
//     counter--;
//   } while (counter > 0);

//   setBasketItems([...basketListItems, ...tempArr]);
// };

const Item = (props) => {
  const {
    currentItem,
    returnBasketListItems,
    decreaseCounter,
    increaseCounter,
    counter,
    isLogin,
  } = props;


  return (
    <div className={itemStyle.mainWrapper}>
      <div className={itemStyle.wrapper}>
        <div className={itemStyle.imgWrapper}>
          <img src={props.currentItem.images[0]} alt={currentItem.title} />
        </div>
        <div className={itemStyle.textWrapper}>
          <h2>{currentItem.title}</h2>
          <p>{currentItem.description}</p>
          <div className={itemStyle.priceWrapper}>
            <div className={itemStyle.priceDown}>
              <span> price:</span>{' '}
              <span className={itemStyle.price}>{currentItem.price} $</span>
            </div>
            <div className={itemStyle.btnWrapper}>
              <button onClick={props.decreaseCounter}>&lt;</button>
              {props.counter}
              <button onClick={props.increaseCounter}>&gt;</button>
            </div>
            {props.isLogin ? (
              <button
                onClick={() => {
                  props.addStuffToBasketList();
                }}
                type="button"
              >
                <img src={basket} alt="add to basket" />
              </button>
            ) : (
              <div>To buy smth you should Log in</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentItem: state.item,
    counter: state.counter,
    isLogin: state.isLogin,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    decreaseCounter: () => {
      dispatch({ type: 'DECREASE_COUNTER' })
    },
    increaseCounter: () => {
      dispatch({ type: 'INCREASE_COUNTER' })
    },
    addStuffToBasketList: () => {
      dispatch({ type: 'ADD_STUFFS_TO_BASKET' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
