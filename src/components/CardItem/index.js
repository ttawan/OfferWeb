import React from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';
import { Link } from 'react-router-dom';

const CardItem = ({src, id}) => {
  return (
    <Link to={`/offer/id/${id}`}>
      <article className="CardItem__container">
        <Img
          src={[src, 'https://via.placeholder.com/300x100']}
          className="CardItem__item--img img-fluid"
        />
      </article>
    </Link>
  );
};

CardItem.propTypes = {
  src: PropTypes.func,
};

CardItem.defaultProps = {
  src: null,
};

export default CardItem;
