import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Nav from './components/Nav';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Nav />}>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
