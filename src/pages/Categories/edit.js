import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import BreadCrumb from '../../components/BreadCrumb';
import Alert from '../../components/Alert';
import Form from './form';

function CategoryEdit() {
  const [form, setForm] = useState({
    name: 'elfin',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // action simpan categories
  };
  return (
    <Container>
      <BreadCrumb
        textSecound={'Categories'}
        urlSecound={'/categories'}
        textThird='Create'
      />
      {/* <Alert type='danger' message={'Name kategori tidak boleh kosong'} /> */}
      <Form
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default CategoryEdit;
