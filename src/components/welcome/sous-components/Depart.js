import React, { Component } from 'react'
import { ReactComponent as AngleRight} from '../../../img/angle-right.svg'
import { ReactComponent as AngleLeft} from '../../../img/angle-left.svg'

const custom = {
  icon: {
    width: '20px',
    height: '20px',
    margin: ' 7px 10px 10px'
  }
}
export class Depart extends Component {
  state = {
    retour: false,
    seconde: new Date().getSeconds(),
    minute: new Date().getMinutes(),
    hour: new Date().getHours(),
  }

  somme = tab=>{
    let s=0
    for(let i=0;i<tab.length;i++){
      s+=parseInt(tab[i])
    }
    return s
  }

  depart = ()=>{
    
    const {depart,nbVoyageur,demi,percentDemi,setTanaFianara,road,updateRoad,setFianaraTana}=this.props
    if(road == "tf" && this.somme(demi)<=percentDemi){
  this.setState({retour: true})
      setTanaFianara()
      updateRoad()
      console.log(road)
      console.log('tana fianara')
    }else if(road == "ft" && this.somme(demi)<=percentDemi) {
      this.setState({retour: false},()=>console.log(this.state.retour))
      setFianaraTana()
      updateRoad()
      
    }
    if((this.somme(demi)>percentDemi)){
      alert("VOUS NE POUVEZ PAS TRANSPORTER AU PLUS "+
      percentDemi+ " DE DEMI VOYAGE")
     
    }else{
      this.setState({retour: true})
    }
  }

  updatTime = ()=>{
    this.setState({
      seconde: new Date().getSeconds(),
      minute: new Date().getMinutes(),
      hour: new Date().getHours(),
    })
  }

  
  render() {
    const {depart,nbVoyageur,demi,percentDemi,setTanaFianara}=this.props
    const {seconde,minute,hour} = this.state
    const departOrArrival = this.state.retour ?  <span><AngleLeft  style={custom.icon} />DEPART  FIANARA - TANA DISPONIBLE </span> : <span>DEPART  TANA - FIANARA DISPONIBLE<AngleRight style={custom.icon} /></span>
    const displayDepart = depart ? (<button onClick={this.depart}>{departOrArrival}</button>) : (<button disabled>{this.state.retour ? "EN ATTENTE DEPART FIANARA-TANA" : "EN ATTENTE DEPART TANA-FIANARA"}</button>)
    setInterval(this.updatTime, 1000);
  
    return (
      <div className="depart">
      
      <div className="hour">
        <span>{hour<10&&"0"}  {hour} :{minute<10&&"0"}{minute} : {seconde<10&&"0"}{seconde}  </span>
      </div>
        {displayDepart}
        <p style={{marginTop: '10px'}}>{new Date().toDateString(new Date())}</p>
        <hr />

      </div>
    )
  }
}

export default Depart
