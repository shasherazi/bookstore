import propTypes from 'prop-types';
import styles from '../styles/Button.module.css';

const Button = ({
  type, title, onClick, className,
}) => (
  <button
    className={`${styles[className]}`}
  type={type} onClick={onClick}> {/* eslint-disable-line */}
    {title}
  </button>
);

Button.propTypes = {
  type: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  onClick: propTypes.func,
  className: propTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
