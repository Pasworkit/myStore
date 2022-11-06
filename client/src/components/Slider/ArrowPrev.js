import { memo } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

function ArrowPrev({ onClick }) {
  return (
    <Button
      className="arrow-left arrow"
      onClick={onClick}
    >
      <div className="custom-arrow-left" />
    </Button>
  );
}

ArrowPrev.propTypes = {
  onClick: PropTypes.func,
};
ArrowPrev.defaultProps = {
  onClick: () => {},
};

export default memo(ArrowPrev);
