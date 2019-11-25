import React from 'react';

const Barcode = ({ name }) => {
  return (
    <div className="Barcode__container">
      <img className="Barcode__cover--img img-fluid" src="https://www.databar-barcode.info/wp-content/uploads/2015/02/barcode-13.png" alt={name} />
    </div>
  );
};

export default Barcode;
