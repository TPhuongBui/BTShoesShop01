import React, { Component } from 'react'
import ProductItem from './ProductItem'

import './shoesShop.css'

export default class ProductList extends Component {

    renderShoesList = () =>{
        return this.props.listShoes.map((shoes) => { 
            return <div className="col-4" key={shoes.id}>
            <ProductItem seeCart={this.props.seeCart} shoes={shoes}/>
        </div>
         })
    }

    render() {
        // console.log("list", this.props)
        return (
            <div className='row'>
            {/* chứa nhiều col-4 */}
            {this.renderShoesList()}
      </div>
        )
    }
}
