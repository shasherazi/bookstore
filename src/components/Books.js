import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';
import Book from './Book';
import styles from '../styles/Books.module.css';
import Button from './Button';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          className={styles.input}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Button
          type="button"
          title="Add Book"
          onClick={() => {
            dispatch(addBook({ title, author }));
            setAuthor('');
            setTitle('');
          }}
        />
      </form>
    </div>
  );
};
export default Books;
