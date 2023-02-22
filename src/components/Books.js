import Book from './Book';
import styles from '../styles/Books.module.css';

const Books = () => (
  <div className={styles.books}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Book title="A Game of Thrones" author="George R. R. Martin" />
      </li>
      <li className={styles.item}>
        <Book title="Ego is the Enemy" author="Ryan Holiday" />
      </li>
      <li className={styles.item}>
        <Book title="Fire and Blood" author="George R. R. Martin" />
      </li>
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
export default Books;
