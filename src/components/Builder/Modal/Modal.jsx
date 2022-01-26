import React from 'react';
import classes from './Modal.module.css';
export const Modal = (props) => {
  return (
    <div >
    <div className={classes.backdrop} ></div>
    <div className={classes.modalBody}>
     {/* inner component */}
     {props.children}
    </div>
  </div>
  );
};
