import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';
import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput';
import Table from '../../components/TableWithAction';

function Speakers() {
  const navigate = useNavigate();
  const data = [{ name: 'Elfin', id: 1, role: 'Backend' }];
  return (
    <Container>
      <Button action={() => navigate('/speakers/create')}>Tambah</Button>
      <BreadCrumb textSecound={'Speakers'} />
      <SearchInput />
      <Table
        thead={['Nama', 'Role', 'Aksi']}
        data={data}
        tbody={['name', 'role']}
      />
    </Container>
  );
}

export default Speakers;
