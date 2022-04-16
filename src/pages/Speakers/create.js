import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import BreadCrumb from '../../components/BreadCrumb';
import Alert from '../../components/Alert';
import Form from './form';
import { postData } from '../../utils/fetchData';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNotif } from '../../redux/notif/actions';

function SpeakersCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    role: '',
    file: '',
    avatar: '',
  });

  const [alert, setAlert] = useState({
    status: false,
    type: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    if (e.target.name === 'avatar') {
      if (
        e?.target?.files[0]?.type === 'image/jpg' ||
        e?.target?.files[0]?.type === 'image/png' ||
        e?.target?.files[0]?.type === 'image/jpeg'
      ) {
        var size = parseFloat(e.target.files[0].size / 3145728).toFixed(2);

        if (size > 2) {
          setAlert({
            ...alert,
            status: true,
            type: 'danger',
            message: 'Please select image size less than 3 MB',
          });
          setForm({
            ...form,
            file: '',
            [e.target.name]: '',
          });
        } else {
          setForm({
            ...form,
            file: e.target.files[0],
            [e.target.name]: URL.createObjectURL(e.target.files[0]),
          });
        }
      } else {
        setAlert({
          ...alert,
          status: true,
          type: 'danger',
          message: 'type image png | jpg | jpeg',
        });
        setForm({
          ...form,
          file: '',
          [e.target.name]: '',
        });
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      let formData = new FormData();

      formData.append('avatar', form.file);
      formData.append('name', form.name);
      formData.append('role', form.role);

      const res = await postData('api/v1/speakers', formData, true);

      dispatch(
        setNotif(
          true,
          'success',
          `berhasil tambah speaker ${res.data.data.name}`
        )
      );
      navigate('/speakers');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: 'danger',
        message: err.response.data.msg,
      });
    }
  };

  return (
    <Container>
      <BreadCrumb
        textSecound={'Speakers'}
        urlSecound={'/speakers'}
        textThird='Create'
      />
      {alert.status && <Alert type={alert.type} message={alert.message} />}
      <Form
        form={form}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default SpeakersCreate;
