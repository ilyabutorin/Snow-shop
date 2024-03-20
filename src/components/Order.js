import React, { Component } from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img} alt=''/>
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price} &euro;</b>
        <RiDeleteBin5Line className='delete-item' onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order