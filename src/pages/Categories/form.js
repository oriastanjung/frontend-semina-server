import React from 'react';
import { Form } from 'react-bootstrap';
import Button from '../../components/Button';
import TextInputWithLabel from '../../components/TextInputWithLabel';

export default function CategoriesForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
}) {
  return (
    <Form>
      <TextInputWithLabel
        placeholder={'Masukan nama kategori'}
        label={'Nama kategori'}
        name='name'
        value={form.name}
        type='text'
        onChange={handleChange}
      />
      <Button variant='primary' action={handleSubmit} loading={isLoading}>
        Simpan
      </Button>
    </Form>
  );
}
