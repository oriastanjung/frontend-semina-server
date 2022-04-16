import axios from 'axios';
// const config.api_host = 'http://localhost:4000';
import { config } from '../configs';

export function getData(url, params) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};

  return axios.get(`${config.api_host}/${url}`, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function postData(url, payload, formData) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};
  return await axios.post(`${config.api_host}/${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': formData ? 'multipart/form-data' : 'application/json',
    },
  });
}

export async function putData(url, payload) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};
  return await axios.put(`${config.api_host}/${url}`, payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
export async function patchData(url, payload) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};
  return await axios.patch(`${config.api_host}/${url}`, payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function deleteData(url) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};

  return await axios.delete(`${config.api_host}/${url}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
