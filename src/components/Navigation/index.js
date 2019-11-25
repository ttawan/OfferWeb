import React from 'react';
import PropTypes from 'prop-types';

import HomeIcon from 'images/icons/home.svg';
import OfferIcon from 'images/icons/offer.svg';
import TippingIcon from 'images/icons/tipping.svg';
import BookIcon from 'images/icons/book.svg';
import MoreIcon from 'images/icons/more.svg';
import ReactSVG from 'react-svg';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="Navigation__container">
      <nav className="Navigation__wrapper">
        <ul className="Navigation__list">
          <li>
            <Link to="/" className="Navigation__menu">
              <ReactSVG src={HomeIcon} className="Navigation__menu--icon" alt="menu home" />
              <span className="Navigation__menu--title">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link to="/" className="Navigation__menu">
              <ReactSVG src={OfferIcon} className="Navigation__menu--icon" alt="menu home" />
              <span className="Navigation__menu--title">
                Offer
              </span>
            </Link>
          </li>
          <li>
            <Link to="/" className="Navigation__menu">
              <ReactSVG src={TippingIcon} className="Navigation__menu--icon" alt="menu home" />
              <span className="Navigation__menu--title">
                Tipping
              </span>
            </Link>
          </li>
          <li>
            <Link to="/" className="Navigation__menu">
              <ReactSVG src={BookIcon} className="Navigation__menu--icon" alt="menu home" />
              <span className="Navigation__menu--title">
                Book
              </span>
            </Link>
          </li>
          <li>
            <Link to="/" className="Navigation__menu">
              <ReactSVG src={MoreIcon} className="Navigation__menu--icon" alt="menu home" />
              <span className="Navigation__menu--title">
                More
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  title: PropTypes.string,
  goBack: PropTypes.func,
};

Navigation.defaultProps = {
  title: 'Title',
  goBack: null,
};

export default Navigation;
