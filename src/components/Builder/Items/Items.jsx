import React from 'react';
import { Item } from './Item/Item';

export const Items = (props) => {

  const flavors = Object.keys(props.items);
  
  return (

    <div>
        <ul>
            {/* item */}
            {/* <Item/> */}
            { flavors.map( flavor => 
            ( 
            <Item 
            key={flavor} 
            name={flavor} 
            add={props.add} 
            remove={props.remove}
            scoops={props.scoops}
             /> 
            )
            ) }
        </ul>
    </div>
  );
};
