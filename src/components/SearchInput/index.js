import React from 'react';
import { Form } from 'react-bootstrap';

function SearchInput({ handleChange, query }) {
  return (
    <Form.Group className='mb-3'>
      <Form.Control
        type='text'
        placeholder='Masukan pencarian disini'
        value={query}
        name='query'
        onChange={handleChange}
      />
    </Form.Group>
  );
}

export default SearchInput;
