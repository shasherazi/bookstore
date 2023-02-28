import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from '../styles/Book.module.css';
import Button from './Button';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.book}>
      <h2>{title}</h2>
      <p>{author}</p>
      <Button
        type="button"
        title="Remove"
        onClick={
        () => {
          dispatch(removeBook({ id }));
        }
    }
      />
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
