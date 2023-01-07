import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    // console.log("item",this.props)
    let {shoes} = this.props
    return (
      <div>
        <div className="card">
          <img src={shoes.image} className="card-img-top img-fuild" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{shoes.name}</h5>
            <p className="card-text">${shoes.price.toLocaleString()}</p>
            <button onClick={() => { 
              this.props.seeCart(shoes);
             }} className="btn btn-success" data-toggle="modal" data-target="#exampleModal">Xem chi tiết</button>
            {/* <button className='btn btn-secondary'>Xem Chi Tiết</button> */}
          </div>
        </div>
      </div>
    )
  }
}
