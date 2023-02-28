import uniqid from 'uniqid';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const id = 'nwjhISg2xHwIiqj8Ugat';

const initialState = {
  books: [],
};

export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  const response = await fetch(`${url}/apps/${id}/books`);
  const data = await response.json();
  return data;
});

export const postBook = createAsyncThunk('book/addBook', async (book) => {
  const response = await fetch(`${url}/apps/${id}/books`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: uniqid(),
      title: book.title,
      author: book.author,
      category: 'Fiction',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
});

export const deleteBook = createAsyncThunk('book/removeBook', async (bookId) => {
  const response = await fetch(`${url}/apps/${id}/books/${bookId}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = {
        item_id: `item${state.books.length + 1}`,
        title: action.payload.title,
        author: action.payload.author,
      };

      state.books.push(book);
    },
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload.id),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const newBooks = Object.entries(action.payload).map((book) => ({
        item_id: book[0],
        ...book[1][0],
      }));

      return { ...state, books: newBooks };
    });
  },

});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
