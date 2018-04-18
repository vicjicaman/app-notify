import React from 'react';
import {ToastContainer, toast} from 'react-toastify';

export const close = (id) => {
  toast.dismiss(id);
}

export const notify = ({
  message,
  type = "info",
  closeButton,
  autoClose = 2500
}) => {

  let closeOnClick = true;

  if (autoClose !== false) {
    if (type === "success") {
      autoClose = 1500;
    }

    if (type === "info") {
      autoClose = 2000;
    }

    if (type === "warning") {
      autoClose = 3000;
    }

    if (type === "error") {
      autoClose = 5000;
    }

    if (type === "fatal") {
      autoClose = 8000;
    }
  } else {
    closeOnClick = false;
  }

  if (type === "fatal") {
    type = "error";
  }

  return toast(message, {type, autoClose, closeButton, closeOnClick});
}

const PureComp = ({}) => (<ToastContainer position="top-right" type="info" autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick={false} pauseOnHover={true}/>);
export {
  PureComp as NotifyContainer
};
