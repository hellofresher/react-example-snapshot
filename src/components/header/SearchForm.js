import React, { useState } from 'react';

export default function SearchForm({
  history,
  onSubmit
}) {
  const [q, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e, h, entry) => {
    onSubmit(e, h, entry);
  };

  return (
    <form
      className="Search__form"
      onSubmit={ e => handleSubmit(e, history, q) }
    >
      <input 
        type="text"
        name="search"
        value={q}
        className="Search__input"
        placeholder="Search..."
        onChange={handleChange}
      />

      <button type="submit" className="Search__submit">Search</button>
    </form>
  );
}
