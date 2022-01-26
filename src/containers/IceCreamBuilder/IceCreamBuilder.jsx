import React, { Component } from 'react';
import classes from './IceCreamBuilder.module.css';
import { IceCream } from '../../components/IceCream/IceCream';
import { Builder } from '../../components/Builder/Builder';
export default class IceCreamBuilder extends Component {
    state={
      items:{
       
      },
      scoops:[],
      totalPrice:0

    };

    componentDidMount = ()=>{
      this.setState({
        items:{
          vanilla:45,
          chocolate:60,
          lemon:35,
          orange:40,
          strawberry:60,
        }
      })
    }
    addScoop = (scoop)=>{
      const {scoops , items } = this.state;
      const workingScoops = [...scoops];
      workingScoops.push(scoop);

      this.setState( (prevState) =>{
        return {
          scoops:workingScoops,
        totalPrice: prevState.totalPrice + items[scoop],
        }
      });
    } 

    removeScoop = (scoop)=>{
      const {scoops , items , totalPrice} = this.state;
      const workingScoops = [...scoops];
      workingScoops.splice( workingScoops.findIndex(a=>a===scoop) , 1 );

      this.setState({
        scoops:workingScoops,
        totalPrice: totalPrice - items[scoop],
      })
    }
  render() {
    const {items , totalPrice ,scoops} = this.state;
    // const scoops = this.state.scoops;

    
    return (

        <div className={['container' , classes.container].join(' ')}>
            <IceCream scoops ={this.state.scoops}  />
            <Builder 
            items={items} 
            price={totalPrice} 
            add={this.addScoop} 
            remove={this.removeScoop}
            scoops = {scoops}
            
            />
        </div>
    ) 
    ;
  }
}
