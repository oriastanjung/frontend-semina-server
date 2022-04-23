import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';
import Button from '../../components/Button';
import Table from '../../components/TableWithAction';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPayments} from '../../redux/payments/actions';
import AlertMessage from '../../components/Alert';
import Swal from 'sweetalert2';
import { deleteData, putData } from '../../utils/fetchData';
import { setNotif } from '../../redux/notif/actions';

function PaymentsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const notif = useSelector((state) => state.notif);
  const payments = useSelector((state) => state.payments);

  useEffect(() => {
    return () => {
      if (!user.token) return navigate('/login');
    };
  });

  useEffect(() => {
    dispatch(fetchPayments());
  }, [dispatch, ]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Apa kamu yakin?',
      text: 'Anda tidak akan dapat mengembalikan ini!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Iya, Hapus',
      cancelButtonText: 'Batal',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`api/v1/payments/${id}`);

        // Swal.fire({
        //   position: 'top-end',
        //   icon: 'success',
        //   title: `Berhasil hapus kategori ${res.data.data.name}`,
        //   showConfirmButton: false,
        //   timer: 1500,
        // });

        dispatch(
          setNotif(
            true,
            'success',
            `berhasil hapus speaker ${res.data.data.type}`
          )
        );

        dispatch(fetchPayments());
      }
    });
    
  };

  const handleChangeStatus = async(id) => {
    Swal.fire({
      
      position: 'center',
      icon: 'success',
      title: `Berhasil ubah status`,
      showConfirmButton: true,
      timer: 1500,
    });

    const res = await putData(`api/v1/payments/${id}/status?`);
    dispatch(
      setNotif(
        true,
        'success',
        `berhasil ubah status bank ${res.data.data.type}`
      )
    );

    dispatch(fetchPayments());
  };
  return (
    <Container>
      <Button action={() => navigate('/payments/create')}>Tambah</Button>
      <BreadCrumb textSecound={'payments'} />
      
      {notif.status && (
        <AlertMessage type={notif.typeNotif} message={notif.message} />
      )}
      <Table
        status={payments.status}
        thead={['Nama Bank', 'Icon', 'Status', 'Aksi']}
        data={payments.data}
        tbody={['type', 'imageUrl', 'status']}
        editUrl={`/payments/edit`}
        deleteAction={(id) => handleDelete(id)}
        toggleStatusBank = {(id) => handleChangeStatus(id)}
        withoutPagination
      />
    </Container>
  );
}

export default PaymentsPage;
