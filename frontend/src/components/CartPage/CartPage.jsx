import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import './cart.css';
import Item from './Item';
import { Link } from 'react-router-dom';

const CartPage = ({ match, location, history }) => {
  const itemId = match.params.id;
  const query = location.search && location.search.split('&');
  const qty = Number(query[0].split('=')[1]);
  const table = Number(query[1].split('=')[1]);

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (itemId && qty && table) {
      dispatch(addToCart(itemId, qty, table));
    }
  }, []);

  const totalPrice =
    cartItems.length > 0
      ? cartItems.map((el) => el.qty * el.price).reduce((a, c) => a + c)
      : 0;

  const checkoutHandler = () => {
    history.push(`/placeorder/${itemId}`);
  };

  return (
    <div className="container">
      {(qty && table) == 0 ? (
        <div
          className="alert alert-danger"
          style={{ marginTop: 80 }}
          role="alert"
        >
          You didn't selected table number or number of people for this order:{' '}
          {itemId}
        </div>
      ) : (
        <div style={{ paddingTop: '100px' }}>
          <h1>Orders Placed</h1>
          <div className="row">
            <div className="col-sm-8">
              {cartItems.length ? (
                cartItems.map((el) => (
                  <>
                    <Item data={el} />{' '}
                    <hr style={{ borderTop: '2px solid #ddd' }} />
                  </>
                ))
              ) : (
                <>
                  <div className="alert alert-danger" role="alert">
                    You don't have any orders yet! :)
                    <Link className="btn btn-dark ml-3" to="/menu">
                      Menu
                    </Link>
                  </div>
                </>
              )}
            </div>
            <div className="col-sm-4">
              <div className="checkout card p-5">
                <h4 className="text-center">
                  Total Orders Placed: {cartItems.length}
                </h4>
                <h4 className="text-center">Total price: ₹{totalPrice}</h4>

                <p className="text-center">OR</p>
                <button className="btn btn-dark" onClick={checkoutHandler}>
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
