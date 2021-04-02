import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Parallax, Background } from 'react-parallax';
import lunchImg from '../../assets/food4.jpg';
import dinnerImg from '../../assets/food1.jpg';
import Lunch from './Lunch';
import Dinner from './Dinner';
import { getMenuItems } from '../../actions/menuActions';
import Loader from '../Loader/Loader';

const MenuPage = () => {
  const dispatch = useDispatch();
  const { menuItems, loading, error } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getMenuItems());
  }, [dispatch]);

  let starters = [];
  let main = [];
  let drinks = [];
  let desserts = [];

  starters = menuItems.filter((item) => item.category === 'Starters');
  main = menuItems.filter((item) => item.category === 'Main');
  drinks = menuItems.filter((item) => item.category === 'Drinks');
  desserts = menuItems.filter((item) => item.category === 'Desserts');

  return (
    <>
      <div className="color-overlay-menu"></div>
      <div className="menu_bg">
        <div className="content">
          <h1>PRISTINE MENU</h1>
        </div>
      </div>

      <div className="container menuPage">
        <div className="row">
          <div className="col-sm-6">
            <h3>STARTERS</h3>
            <div className="dishes">
              {!loading ? (
                starters.map((el) => (
                  <p>
                    {el.dish} <span className="dots">.............</span>{' '}
                    <span>₹{el.price}</span>
                  </p>
                ))
              ) : (
                <Loader />
              )}
            </div>

            <h3 className="pt-3">DRINKS</h3>
            <div className="dishes">
              {!loading ? (
                drinks.map((el) => (
                  <p>
                    {el.dish} <span className="dots">.............</span>{' '}
                    <span>₹{el.price}</span>
                  </p>
                ))
              ) : (
                <Loader />
              )}
            </div>
          </div>{' '}
          {/* col ends */}
          <div className="col-sm-6">
            <h3>MAIN</h3>
            <div className="dishes">
              {!loading ? (
                main.map((el) => (
                  <p>
                    {el.dish} <span className="dots">.............</span>{' '}
                    <span>₹{el.price}</span>
                  </p>
                ))
              ) : (
                <Loader />
              )}
            </div>

            <h3>DESSERTS</h3>
            <div className="dishes">
              {!loading ? (
                desserts.map((el) => (
                  <p>
                    {el.dish} <span className="dots">.............</span>{' '}
                    <span>₹{el.price}</span>
                  </p>
                ))
              ) : (
                <Loader />
              )}
            </div>
          </div>
          {/* col ends */}
        </div>
      </div>

      <Parallax bgImage={lunchImg} strength={500}>
        <div className="parallax">
          <div className="color-overlay-menu"></div>
          <h1>lunch</h1>
        </div>
      </Parallax>

      <Lunch />

      <Parallax bgImage={dinnerImg} strength={500}>
        <div className="parallax">
          <div className="color-overlay-menu"></div>
          <h1>dinner</h1>
        </div>
      </Parallax>

      <Dinner />
    </>
  );
};

export default MenuPage;
