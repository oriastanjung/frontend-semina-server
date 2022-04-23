import React from 'react';
import { Figure, Form } from 'react-bootstrap';
import Button from '../../components/Button';
import TextInputWithLabel from '../../components/TextInputWithLabel';

export default function PaymentsForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
}) {
  return (
    <Form>
      <TextInputWithLabel
        placeholder={'Masukan nama Banl'}
        label={'Nama Bank'}
        name='type'
        value={form.type}
        type='text'
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={'Masukan Status Bank'}
        label={'Status Bank (true/false)'}
        name='status'
        value={form.status}
        type='text'
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={'Masukan Foto Bank'}
        label={'Foto Bank'}
        name='imageUrl'
        // value={form.imageUrl}
        type='file'
        onChange={handleChange}
      />
      {form.imageUrl !== '' && (
        <div>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt='171x180'
              src={form.imageUrl}
            />

            <Figure.Caption>Perview image Bank</Figure.Caption>
          </Figure>
        </div>
      )}
      <Button variant='primary' action={handleSubmit} loading={isLoading}>
        {edit ? 'Ubah' : 'Simpan'}
      </Button>
    </Form>
  );
}
