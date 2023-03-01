import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import { checkStatus } from '../redux/categories/categoriesSlice';
import styles from '../styles/Categories.module.css';

const Categories = () => {
  const status = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();
  return (
    <div className={styles.categories}>
      <h1>{status}</h1>
      <Button
        className="check-status"
        type="button"
        title="Check status"
        onClick={() => dispatch(checkStatus())}
      />
    </div>
  );
};
export default Categories;
