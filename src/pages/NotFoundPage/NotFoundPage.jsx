import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <p>
        Not Found! Please follow this {''}
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
