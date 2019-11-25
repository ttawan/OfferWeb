import React from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';

import Barcode from 'components/Barcode';

const CardItemDetail = ({src, id, title}) => {
  return (
    <article className="CardItemDetail__container">
      <Img
        src={[src, 'https://via.placeholder.com/300x100']}
        className="CardItemDetail__item--img img-fluid"
      />
      <div className="CardItemDetail__content">
        <h2>
          {title}
        </h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Scan the barcode to redeem</p>
        <Barcode />
      </div>
    </article>
  );
};

CardItemDetail.propTypes = {
  src: PropTypes.func,
};

CardItemDetail.defaultProps = {
  src: null,
};

export default CardItemDetail;
