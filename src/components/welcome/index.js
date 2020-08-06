import React, { Component } from 'react'
import Depart from './sous-components/Depart';
import NombreVoyageur from './sous-components/NombreVoyageur';
import Caisse from './sous-components/Caisse';

export class Welcome extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       depart: false,
       nbVoyageur: 0,
       full: [],
       demi: [],
      f: 0,
      d: 0,
      percentDemi: 0,
      caisseTotal: 0,
      disabledInput: false,
      tanaFianara: 0,
      fianaraTana: 0,
      road: "tf"
    }
  }

  handleChangeF = e=>{
    this.setState({f :  e.target.value})
  }
  handleChangeD = e=>{
    this.setState({d :  e.target.value})
  }
  reset = ()=>{
    this.setState({
      depart: false,
      nbVoyageur: 0,
      full: [],
      demi: [],
     f: 0,
     d: 0,
     percentDemi: 0,
     caisseTotal: 0,
     disabledInput: false,
     tanaFianara: 0,
     fianaraTana: 0,
     road: "tf"
   })
  }
  handleSubmit=e=>{
    const {f,d,nbVoyageur,full,demi}= this.state
    e.preventDefault()
    let somme = nbVoyageur+parseInt(d) + parseInt(f)
    if(somme>=0 && somme<=150){
      let nbDemi = Math.round((4*parseInt(somme))/100)
  

      this.setState({
        nbVoyageur: somme,
        full: [...full,f],
        demi: [...demi,d],
        f: 0,
        d: 0,
        percentDemi: nbDemi,
   
      
      },()=>{
    
        const {nbVoyageur}= this.state
     
          if( nbVoyageur>=100 && nbVoyageur<=150 ){
          
            this.setState({
              depart: true,
            
            })
            
          }else{
            this.setState({depart: false})
          }
      })
    }else{
      alert("ATTENDRE UN AUTRE TRAIN")
      this.setState({
        f: 0,
        d: 0,
      
      })
      
    }



  //  FORMULE 
   /*
    if nvVoyag : 140
    140v===>100%
    ?<========4%
   */
    
    
  }
  somme = tab=>{
    let s=0
    for(let i=0;i<tab.length;i++){
      s+=parseInt(tab[i])
    }
    return s
  }




  setTanaFianara = ()=>{
    const {full,demi,tanaFianara} = this.state
    
    this.setState({
      tanaFianara: (this.somme(full)*40000) + (this.somme(demi) * 15000),
      nbVoyageur: 0,
      full: [],
      demi: [],
      f: 0,
      d: 0,
      percentDemi: 0,
      depart: false

    })
    
  }

  setFianaraTana= ()=>{
    const {full,demi,fianaraTana} = this.state
    
    this.setState({
      fianaraTana: (this.somme(full)*40000) + (this.somme(demi) * 15000),
      nbVoyageur: 0,
      full: [],
      demi: [],
      f: 0,
      d: 0,
      percentDemi: 0,
      depart: false

    })
    
  }


  updateRoad = ()=>{
    const {road} = this.state
    this.setState({road: road == 'tf' ? 'ft' : 'tf'})
  }


  
  render() {

    const {depart,nbVoyageur,f,d,full,demi,percentDemi,disabledInput,tanaFianara,fianaraTana,road,updateRad}= this.state
    const showValidate = f !== 0 || d !==0 ? (<button>Valider</button>) : (<button disabled>Valider</button>)
    return (
      <div className="container">
        <Depart depart={depart} nbVoyageur={nbVoyageur}  demi={demi} percentDemi={percentDemi} setTanaFianara={this.setTanaFianara} road={road} updateRoad={this.updateRoad}  setFianaraTana={this.setFianaraTana} />
        <div className="sous-container">
          <NombreVoyageur nbVoyageur={nbVoyageur} full={full} demi={demi} percentDemi={percentDemi}  />
          <div className="item">
            <form onSubmit={this.handleSubmit}>
              <i>Voyage complet: </i>
              <input onChange={this.handleChangeF}  value={f} type="number" min="0" placeholder="Nombre voyageur" id="vPlein"  />
              <br />
              <div id="demiV" style={{marginTop: '20px'}}>
              <i >Demi voyage: </i>
              <input  id="demiV" onChange={this.handleChangeD} value={d} type="number" min="0" placeholder="Demi voyage" />
              </div>
              <br />
              
{showValidate}

            </form>
          </div>
          <Caisse  tanaFianara={tanaFianara}  fianaraTana={fianaraTana} reset={this.reset} />
        </div>

      </div>
    )
  }
}

export default Welcome
