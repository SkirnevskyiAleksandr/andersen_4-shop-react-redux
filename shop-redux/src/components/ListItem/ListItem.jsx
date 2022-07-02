import React from 'react';
import { NavLink } from 'react-router-dom';
import basket from '../../assets/add_to_basket.svg';
import listItemStyle from './ListItem.module.css';
import { connect } from "react-redux";

const ListItem = (props) => {
  const {
    usersList,
    reTurnItem,
    returnBasketListItems,
    isLogin
  } = props;

  return (
    <>
      {
        usersList.map((elem) => {
          return (
            <div key={`${elem.id}${elem.title}`} className={listItemStyle.wrapper}>
              <div><img src={elem.images[0]} alt={elem.title} /></div>
              <div>
                <NavLink to={`/item/${elem.id}`}><p onClick={() => { props.reTurnItemFun(elem) }}>{elem.title}</p></NavLink>
                <div className={listItemStyle.priceWrapper}>
                  <div>
                    <span> price:</span> <span className={listItemStyle.price}>{elem.price} $</span>
                  </div>
                  {
                    !isLogin ? <button onClick={props.addSingleStuff} type='button'><img src={basket} alt="add to basket" /></button> :
                      <div> You should Log in to buy smth</div>
                  }
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  );
}

function mapStateToProps(state) {
  return {
    usersList: state.usersList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    reTurnItemFun: (item) => {
      dispatch({ type: 'RETURN_ITEM', currentItem: item });
    },
    addSingleStuff: () => {
      dispatch({ type: 'ADD_TO_BASKET_SINGLE_STUFF' })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
