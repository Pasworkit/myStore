// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonBuy.module.scss';

function ButtonBuy(props) {
  const {
    isdisabled, padding, backgroundColor, handleClick, text,
  } = props;
  return (
    <button type="button" disabled={isdisabled} className={styles.buttonsMain} style={{ backgroundColor, padding }} onClick={handleClick}>
      {text}
    </button>
  );
}

ButtonBuy.propTypes = {
  isdisabled: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  backgroundColor: PropTypes.string,
  padding: PropTypes.string,
  handleClick: PropTypes.func,
};

ButtonBuy.defaultProps = {
  isdisabled: false,
  backgroundColor: '#456F49',
  padding: '15px 30px',
  handleClick: () => {},
};

export default ButtonBuy;
