// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonBuy.module.scss';

function ButtonBuy(props) {
  const {
    padding, backgroundColor, handleClick, text,
  } = props;
  return (
    <button type="button" className={styles.buttonsMain} style={{ backgroundColor, padding }} onClick={handleClick}>
      {text}
    </button>
  );
}

ButtonBuy.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  backgroundColor: PropTypes.string,
  padding: PropTypes.string,
  handleClick: PropTypes.func,
};

ButtonBuy.defaultProps = {
  backgroundColor: '#456F49',
  padding: '15px 30px',
  handleClick: () => {},
};

export default ButtonBuy;
