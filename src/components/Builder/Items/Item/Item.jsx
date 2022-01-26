import React from 'react';
import classes from './Item.module.css';
import {countBy} from 'lodash';
export const Item = (props) => {
  const name = props.name;
  const countBySc = countBy(props.scoops)
  return (

        <li className={classes.item}>
            <span>{name}</span>
            { countBySc[name] >=0 ? <span className={classes.quantity}>{countBySc[name]}</span> :null }
            
            <span className={classes.right}>
                <button onClick={props.add.bind(this, name)} type="button" className={[classes.plus, 'rounded'].join(' ')}>+</button>
                <button type="button" onClick = { ()=> props.remove(name) } className={[classes.minus, 'rounded'].join(' ')}>-</button>
            </span>
        </li>
  ) ;
};
