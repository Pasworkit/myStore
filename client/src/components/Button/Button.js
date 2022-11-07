// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    children, onClick, ...rest
  } = props;

  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  children: null,

};

export default memo(Button);
