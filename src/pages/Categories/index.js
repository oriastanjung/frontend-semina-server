import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';
import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput';
import Table from '../../components/TableWithAction';

function Categories() {
  const navigate = useNavigate();
  const data = [{ name: 'backend', id: 1, user: 'elfin' }];
  return (
    <Container>
      <Button action={() => navigate('/categories/create')}>Tambah</Button>
      <BreadCrumb textSecound={'Categories'} />
      <SearchInput />
      <Table thead={['Nama', 'Aksi']} data={data} tbody={['name', 'user']} />
    </Container>
  );
}

export default Categories;
