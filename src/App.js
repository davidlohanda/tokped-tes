import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={nominal : null , error : ''}

  
  getNominal = () => {
    if(/^[0-9]/.test(this.refs.nominal.value) === false){
      this.setState({error:'input hanya boleh angka'})
    }
    this.setState({nominal : this.refs.nominal.value})
  }

  renderJsx = () => {
    var pecahanUang = [100000,50000,20000,10000,5000,2000,1000,500,200,100,50]
    var nominal = this.state.nominal
    var jumlahPerPecahan = 0
    var jsx = pecahanUang.map((val,i) => {
      jumlahPerPecahan = parseInt(nominal / val)
      nominal = nominal - (jumlahPerPecahan*val)
      return(
        <div>
        <tr>
          <td>Jumlah Uang Rp.{val} adalah {jumlahPerPecahan}</td>
        </tr>
        <tr>
          {
            i===10&&nominal!==0?<tr><td>Sisa Rp.{nominal}</td></tr>:null
          }
        </tr>
        </div>
        
      )
    })

    if(this.state.nominal){
      return jsx
    } 
  }

  renderError = () => {
    if(this.state.error){
      return (
        <h4 className="mt-3" style={{color: 'red'}}>{this.state.error}</h4>
      )
    }
  }
  render() {
    return (
        <div className="container">
        <h1>TOKOPEDIA TES</h1>
          <input type="number" placeholder="Masukan Nominal Uang" ref="nominal" className="form-control mt-5" onChange={()=>this.setState({error:''})}/>
          <button onClick={this.getNominal} className="btn btn-primary mt-2">Submit</button>
          {this.renderError()}
          <div className="table mt-5">
            {this.renderJsx()}
          </div>
        </div>
    );
  }
}

export default App;
