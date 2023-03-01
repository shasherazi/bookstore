import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addBook, fetchBooks, postBook } from '../redux/books/booksSlice';
import Book from './Book';
import styles from '../styles/Books.module.css';
import Button from './Button';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className={styles.books}>
      <ul className={styles.list}>
        {books && books.map((book) => (
          <li className={styles.item} key={book.item_id}>
            <Book
              title={book.title}
              author={book.author}
              id={book.item_id}
              category={book.category}
            />
          </li>
        ))}
        <hr className={styles.hr} />
      </ul>
      <form className={styles.form}>
        <h2 className={styles.title}>ADD NEW BOOK</h2>
        <div className={styles.inputsAndButton}>
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
            className="book-add"
            onClick={() => {
              dispatch(addBook({ title, author }));
              dispatch(postBook({ title, author }));
              setAuthor('');
              setTitle('');
            }}
          />
        </div>
      </form>
    </div>
  );
};
export default Books;
