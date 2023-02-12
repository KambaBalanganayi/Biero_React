import React from 'react';
import './Produit.css';

export default class Produit extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        
        let brasserie = ""
        if(this.props.estConnecte){
            brasserie =  <>
                        {/* <p>Prix : {this.props.brasserie}</p> */}
                        <p>Prix : {this.props.biere.brasserie}</p>
                        </>;
        }
        return (
            <section className='uneBiere'>
                
                    <img src='https://picsum.photos/150/150' alt='biere_image' className='uneImageBiere'></img>
                
                <article className="produit">
                {/* <p>Nom : {this.props.nom}</p> */}
                <p><strong>Nom : </strong>{this.props.biere.nom}</p>
                <p><strong>Brasserie : </strong>{this.props.biere.brasserie}</p>
                {brasserie}
                
                </article>
            </section>

        );
    }
}


