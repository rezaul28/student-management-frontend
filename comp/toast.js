import React from 'react';
import { toast } from 'react-toastify';

const Toast = ({ message, type }) => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'warning':
      toast.warning(message);
      break;
    case 'info':
      toast.info(message);
      break;
    default:
      toast(message);
      break;
  }

  return <></>;
};

export default Toast;
