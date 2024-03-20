import React, { Component } from 'react'
import { FcPlus } from "react-icons/fc";

export class ModalItem extends Component {
    render() {
        return (
            <div className='full-item'>
                <div>
                    <img src={'./img/' + this.props.item.img} alt='' onClick={() => this.props.showModalItem(this.props.item)} />
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.description}</p>
                    <div className='item-use'>
                        <b>{this.props.item.price} &euro;</b>
                        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}><FcPlus /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalItem