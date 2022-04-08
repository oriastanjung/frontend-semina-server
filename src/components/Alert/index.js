import React from 'react';
import { Alert } from 'react-bootstrap';

function AlertMessage({ message, type }) {
  return <Alert variant={type}>{message}</Alert>;
}

export default AlertMessage;
