import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import styles from '../styles/Book.module.css';
import Button from './Button';
import { removeBook, deleteBook } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  title, author, category, id,
}) => {
  const dispatch = useDispatch();

  const progress = Math.floor(Math.random() * 100);
  return (
    <div className={styles.book}>
      <div className={styles.info}>
        <p className={styles.category}>{category}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.author}>{author}</p>
        <div className={styles.buttonsDiv}>
          <Button
            className="book-action"
            type="button"
            title="Remove"
            onClick={
              () => {
                dispatch(removeBook({ id }));
                dispatch(deleteBook(id));
              }
            }
          />
          <span className={styles.separator}>|</span>
          <Button
            className="book-action"
            type="button"
            title="Comment"
          />
          <span className={styles.separator}>|</span>
          <Button
            className="book-action"
            type="button"
            title="Edit"
          />
        </div>
      </div>
      <div className={styles.progress}>
        <div className={styles.progressCircle}>
          <CircularProgressbar value={progress} text={`${progress}%`} />
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
