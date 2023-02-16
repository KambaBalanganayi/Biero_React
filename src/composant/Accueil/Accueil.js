
import React from 'react';
import { Link } from 'react-router-dom';
import './Accueil.css';
import taps from "./img/taps.jpg";


export default class Accueil extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="pageAccueil">
				<div className="contenu">
					<div className="bandeau">
                        <img src={taps} className="imgBandeau"/>
					</div>
				
                        <div className='galleryBtn'>
                            <a href="/produit" className="btnAction"><button>Notre sélection de produit</button></a>
                        </div>
                        <div className="arguments">

                            <div className="argument"><b>Decouvrer de nouvelles bieres</b>
                                <p className='raison'>De nouvelles bieres ajoutés tout les jours!</p>
                            </div>
                            <div className="argument"><b>Partager vos commentaires</b>
                                <p className='raison'>Une communauté vivante!</p>
                            </div>
                            <div className="argument"><b>Notez les bières</b>
                                <p className='raison'>Filtrer parmis les bieres les mieux cotés</p>
                            </div>
                        </div>
			
				</div>
			</div>
        );
    }
}