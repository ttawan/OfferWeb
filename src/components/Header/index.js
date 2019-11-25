import React from 'react';
import PropTypes from 'prop-types';

// import BackIcon from 'assets/icons/close.svg';

const Header = ({goBack, title}) => {
  return (
    <header className="Header__container">
      <h3 className="Header__title">{title}</h3>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  goBack: PropTypes.func,
};

Header.defaultProps = {
  title: 'Title',
  goBack: null,
};

export default Header;
