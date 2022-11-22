import PropTypes from 'prop-types';
import styles from './Preloader.module.scss';
// import { useDispatch } from 'react-redux';
// import { setModalIsOpen } from '../../store/Preloader/actionCreators';

function Preloader(isOpen) {
  if (!isOpen) return null;

  return <div className={isOpen ? styles.close : styles.modalBackground} />;
}

Preloader.propTypes = {

  isOpen: PropTypes.bool.isRequired,
};

export default Preloader;
