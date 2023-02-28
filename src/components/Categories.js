// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
//   const [title, setTitle] = useState('Check status');
  const status = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{status}</h1>
      <Button
        type="button"
        title="Check status"
        onClick={() => dispatch(checkStatus())}
      />
    </div>
  );
};
export default Categories;
