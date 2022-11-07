import { memo } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

function ArrowNext({ onClick }) {
  return (
    <Button
      className="arrow-right arrow"
      onClick={onClick}
    >
      <div className="custom-arrow-right" />
    </Button>
  );
}

ArrowNext.propTypes = {
  onClick: PropTypes.func,
};
ArrowNext.defaultProps = {
  onClick: () => {},
};

export default memo(ArrowNext);
