import React from 'react';
import classes from './TotalPrice.module.css';
export const TotalPrice = (props) => {
  return (

            <div className={classes.total} >
                <div>Total Price</div>
                <div>{props.price}</div>
            </div>

  );
};
