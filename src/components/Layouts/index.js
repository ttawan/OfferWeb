import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function Layouts() {
  return (
    <div />
  )
}

export const Flex = ({
  children, 
  center, 
  middle, 
  between
}) => (
  <div
    className={"d-flex", {
      "justify-center": center,
      "align-items": middle,
      "justify-between": between,
    }}
  >
    {children}
  </div>
);

export default Layouts;
