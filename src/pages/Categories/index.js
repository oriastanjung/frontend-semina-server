import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';
import Button from '../../components/Button';
import Table from '../../components/TableWithAction';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/categories/actions';
import AlertMessage from '../../components/Alert';

function Categories() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const notif = useSelector((state) => state.notif);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    return () => {
      if (!user.token) return navigate('/login');
    };
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <Container>
      <Button action={() => navigate('/categories/create')}>Tambah</Button>
      <BreadCrumb textSecound={'Categories'} />
      {notif.status && (
        <AlertMessage type={notif.typeNotif} message={notif.message} />
      )}
      <Table
        thead={['Nama', 'Aksi']}
        data={categories.data}
        tbody={['name']}
        editUrl={`/categories/edit`}
        deleteAction={(id) => handleDelete(id)}
      />
    </Container>
  );
}

export default Categories;
