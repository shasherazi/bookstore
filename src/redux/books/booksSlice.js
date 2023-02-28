import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const id = 'nwjhISg2xHwIiqj8Ugat';

// const initialState = {
//   books: [
//     {
//       item_id: 'item1',
//       title: 'The Great Gatsby',
//       author: 'John Smith',
//       category: 'Fiction',
//     },
//     {
//       item_id: 'item2',
//       title: 'Anna Karenina',
//       author: 'Leo Tolstoy',
//       category: 'Fiction',
//     },
//     {
//       item_id: 'item3',
//       title: 'The Selfish Gene',
//       author: 'Richard Dawkins',
//       category: 'Nonfiction',
//     },
//   ],
// };

const initialState = {
  books: [],
};

export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  const response = await fetch(`${url}/apps/${id}/books`);
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
      const bookObj = {};
      [bookObj.item_id] = Object.keys(action.payload);
      [bookObj.title] = Object.values(action.payload).map((book) => book[0].title);
      [bookObj.author] = Object.values(action.payload).map((book) => book[0].author);
      [bookObj.category] = Object.values(action.payload).map((book) => book[0].category);

      // push the object if it's not already in the array using the item_id
      if (!state.books.some((book) => book.item_id === bookObj.item_id)) {
        state.books.push(bookObj);
      }
    });
  },

});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
