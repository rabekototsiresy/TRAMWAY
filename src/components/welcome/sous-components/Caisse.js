import React, { Component } from 'react'

export class Caisse extends Component {
  state = {
    tanaFianra: 0,
    fianaraTana: 0,
    showBtn: true,
    total: 10000,
    showTotal: false,
    btnRest: false
  }


getTotal = ()=>{
  const {tanaFianara,fianaraTana,reset} = this.props
  this.setState({
    total: this.state.total+tanaFianara+fianaraTana,
    showBtn: false,
    showTotal: true,
    btnRest: true
  })
  reset()
}

reinitialiser = ()=>{
  this.setState({
    showBtn: true,
    showTotal: false,
    btnRest: false
  })
}
  render() {
  const {tanaFianara,fianaraTana} = this.props
  const displayBtn = ((tanaFianara == 0) || (fianaraTana == 0)) &&  'disabled'
  const showBtnReset = this.state.btnRest &&  <button className="reset" onClick={this.reinitialiser}>RESET</button> 
    return (
      <div className="item">
    {showBtnReset}
        <h4>Caisse</h4>
        
        <hr />
        <p><strong>Tana-Fianara</strong>: {tanaFianara  } ariary</p>
        <p><strong>Fianara-Tana</strong>: {fianaraTana} ariary</p>
          {this.state.showBtn && <button disabled={displayBtn} onClick={this.getTotal}>Total</button>}
          {
             this.state.showTotal && <div className="total"><h3>{this.state.total} ariary</h3></div>
          }
        </div>
    )
  }
}

export default Caisse
