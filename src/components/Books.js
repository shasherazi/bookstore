import { useSelector } from 'react-redux';
import Book from './Book';
import styles from '../styles/Books.module.css';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  return (
    <div className={styles.books}>
      <ul className={styles.list}>
        {books.map((book) => (
          <li className={styles.item} key={book.item_id}>
            <Book title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Book title"
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Author"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Add Book
        </button>
      </form>
    </div>
  );
};
export default Books;
