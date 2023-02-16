import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import './Entete.css';
import beerLogo from '../Details/img/beer-mug-logo.svg';

export default class Entete extends React.Component{
  constructor(props){
    super(props);
    this.state = {courrielValide : false,
                  courriel :""
                  }
    this.setCourriel = this.setCourriel.bind(this);
    this.seConnecter = this.seConnecter.bind(this);
  }

  setCourriel(evt){
    console.log(evt.target.value);
    let courriel= evt.target.value;
    let regEx = /^\S+@\S+\.\S+$/;
    let valide;
    if(courriel !=="" && regEx.test(courriel)){
      valide = true;
    }else{
      valide =false;
    }

    this.setState({
      courrielValide : valide,
      courriel: courriel
    })
  }

  seConnecter(){
    this.props.seConnecter(this.state.courriel)
  }

  render(){
    let btnConnecter = (this.props.estConnecte ? "Se déconnecter": "Se connecter")
    return (
      <header className="App-header">
        <nav>
            <div className="top-nav">
              <div className="barre">
                <Link className="logo" to="/">

                <div className='boiteLogo'>
                  <img src={beerLogo} alt="logoBiere" className='imgLogo'/>
                  <div className='textLogo'>B<span>iero </span></div>
                </div>

                </Link>
                <span className="flex-spacer"></span>
                <p className="menu-mobile"></p>
              </div>
              <span className="flex-spacer"></span>
              <ul>
                <li>
                  <NavLink to="/produit">Les produits</NavLink>
                </li>
              </ul>
              <section className='inputCourriel'>
              <span>Courriel: <input disabled={this.props.estConnecte} type="email" onChange={this.setCourriel}></input></span>
                <button disabled={!this.state.courrielValide} onClick={this.seConnecter} className="loginBtn">{btnConnecter}</button>
              </section>
            </div>
          </nav>
        </header>
    );
  }
}


