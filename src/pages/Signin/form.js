import React from 'react';
import { Form } from 'react-bootstrap';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import Button from '../../components/Button';

export default function FormSignin({
  form,
  handleChange,
  handleSubmit,
  isLoading,
}) {
  return (
    <Form>
      <TextInputWithLabel
        placeholder={'Masukan email'}
        label={'Email'}
        name='email'
        value={form.email}
        type='email'
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={'Masukan password'}
        label={'Password'}
        name='password'
        value={form.password}
        type='password'
        onChange={handleChange}
      />
      <Button variant='primary' action={handleSubmit} loading={isLoading}>
        Submit
      </Button>
    </Form>
  );
}
