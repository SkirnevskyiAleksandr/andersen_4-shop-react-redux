import React from 'react';
import { NavLink } from 'react-router-dom';
import basket from '../../assets/add_to_basket.svg';
import listItemStyle from './ListItem.module.css';
import { connect } from "react-redux";

const ListItem = (props) => {
  return (
    <>
      {
        props.usersList.map((elem) => {
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
                    props.isLogin ? <button onClick={() => { props.addSingleStuff(elem) }} type='button'><img src={basket} alt="add to basket" /></button> :
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
    usersList: state.usersList,
    isLogin: state.isLogin
  }
}

function mapDispatchToProps(dispatch) {
  return {
    reTurnItemFun: (item) => {
      dispatch({ type: 'RETURN_ITEM', currentItem: item });
    },
    addSingleStuff: (item) => {
      dispatch({ type: 'ADD_TO_BASKET_SINGLE_STUFF', currentItem: item })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
