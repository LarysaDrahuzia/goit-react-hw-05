import FadeLoader from 'react-spinners/ClipLoader';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <FadeLoader color="blue" size={2} />
    </div>
  );
};

export default Loader;
