import React from 'react';
import classes from './IceCream.module.css';
import Scoop from './Scoop/Scoop';
export const IceCream = (props) => {

 const scoops = props.scoops;
  return (

    <div className={classes.iceCream}>
              <p className={classes.cone}></p>
            {/* <p>Please start adding scoops</p> */}
           
           {scoops.map( (scoop , index) => <Scoop  key={index}  scoop={scoop}/> )}
             
             
              <div className={classes.cherry}></div>
            </div>
  );
};
