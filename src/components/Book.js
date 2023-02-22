import PropTypes from 'prop-types';
import styles from '../styles/Book.module.css';

const Book = ({ title, author }) => (
  <div className={styles.book}>
    <h2>{title}</h2>
    <p>{author}</p>
    <button type="button" className={styles.button}>
      Remove
    </button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
