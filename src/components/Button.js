import propTypes from 'prop-types';

const Button = ({ type, title, onClick }) => (
  <button type={type} onClick={onClick}> {/* eslint-disable-line */}
    {title}
  </button>
);

Button.propTypes = {
  type: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export default Button;
