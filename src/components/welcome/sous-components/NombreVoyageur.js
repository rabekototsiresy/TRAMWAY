import React, { Component } from 'react'

export class NombreVoyageur extends Component {
  somme = tab=>{
    let s=0
    for(let i=0;i<tab.length;i++){
      s+=parseInt(tab[i])
    }
    return s
  }
  render() {
    const {full,demi,nbVoyageur,percentDemi} = this.props
    const sommeDemi = this.somme(demi)

    const sommeFull = this.somme(full)

    return (
      <div className="item">
     
        <h4>VOAYAGEUR</h4>
        <hr />
        <h5>{nbVoyageur}</h5>
        <p><strong>Voayge complet: </strong>{sommeFull}</p>
        <p><strong>Demi-voyage: </strong>{sommeDemi}</p>
        <p><strong>Nombre du demi voayge qu'on doit emporter(4%): </strong>{percentDemi}</p>
        <hr />
      </div>
    )
  }
}

export default NombreVoyageur
