import React, { Component } from 'react'

export default class GioHang extends Component {

  renderCart = () => {
    return this.props.shoesArray.map((shoesProduct) => {
      return <tr key={shoesProduct.id}>
        <td>{shoesProduct.id}</td>
        <td>
          <img style={{ width: "50px" }} src={shoesProduct.image} alt="" />
        </td>
        <td>{shoesProduct.name}</td>
        <td>{shoesProduct.quantity} </td>
        <td>${shoesProduct.price.toLocaleString()}</td>
        <td>${shoesProduct.description}</td>
      </tr>
    })
  }

  render() {
    return (
      <div>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Shoes Cart</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Mã giày</th>
                      <th>Hình ảnh</th>
                      <th>Tên giày</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Mô tả</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderCart()}

                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-secondary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
