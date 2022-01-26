import React from 'react';
import classes from './Builder.module.css';
import { Items } from './Items/Items.jsx';
import { TotalPrice } from './TotalPrice/TotalPrice.jsx';
import { Modal } from './Modal/Modal.jsx';
export const Builder = (props) => {
 
  
  return (
    <div>
    <div className={classes.builder}>
    <h3>Build your own Ice Cream Sundae</h3>
    
    {/* items */}
    <Items 
    items={props.items}  
    add={props.add} 
    remove={props.remove}
    scoops={props.scoops}
    />
    
    {/* Total Price */}
    <TotalPrice price={props.price}/>
    <button type="button"  className={[classes.order, 'rounded'].join(' ')}>
      Add to Cart
    </button>
  </div>
  <Modal>Hellow Modal</Modal>
  </div>
  );
};
