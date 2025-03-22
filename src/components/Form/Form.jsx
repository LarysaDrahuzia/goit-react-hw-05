import { useState } from 'react';
import css from './Form.module.css';

const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = evt => {
    setQuery(evt.target.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (!query.trim()) {
      alert('Please enter a search term!');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={css.input}
        onChange={handleInput}
        value={query}
        name="search"
        autoComplete="off"
        autoFocus
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
