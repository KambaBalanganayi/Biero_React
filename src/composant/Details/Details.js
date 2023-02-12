import './Details.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IoBeer } from "react-icons/io5";


export default function Details({estConnecte, courriel}){

    const api_url = "http://127.0.0.1:8000/webservice/php/biere/";
    const {id} = useParams();

    const [produit, setProduit] = useState([]);
    const [commentaires, setCommentaires] = useState([]);
    const [note, setNote] = useState([]);

    const [inputComment, setCommentValues] = useState([]);
    const [inputRating, setRatingValues] = useState([]);

    useEffect(()=>{
        fetch(api_url+id)
        .then(data=>data.json())
        .then(data=>{
            //console.log(data);
            setProduit(data.data);
            });

        fetch(api_url+id+'/commentaire')
        .then(data=>data.json())
        .then(data=>{
            //console.log(data.data);
            setCommentaires(data.data);

        });

        fetch(api_url+id+'/note')
        .then(data=>data.json())
        .then(data=>{
            //console.log(data.data);
            setNote(data.data);

        });

    }, []);

    // useEffect(()=>{
    //     console.log(inputRating);
    // }, [inputRating]);

    
    const handleChange = (evt)=>{
        setCommentValues({...inputComment, [evt.target.name]: evt.target.value});
        setRatingValues({...inputRating, [evt.target.name]: evt.target.value});
    };

    const handleSubmitComment = (evt) => {
        evt.preventDefault();
        let entete = new Headers();
        entete.append("Content-Type", "application/json");
        entete.append("Authorization", "Basic " + btoa("biero:biero"));

        console.log(inputComment);
        fetch('http://127.0.0.1:8000/webservice/php/biere/'+id+"/commentaire", {
            method:"PUT",
            body:JSON.stringify(inputComment),
            headers : entete
        })
            .then(response=>response.json())
            .then(data=>{
                console.log(data);
            })
    };
    
    const handleSubmitRating = (evt) => {
        evt.preventDefault();
        let entete = new Headers();
        entete.append("Content-Type", "application/json");
        entete.append("Authorization", "Basic " + btoa("biero:biero"));

        console.log(inputRating);
        fetch('http://127.0.0.1:8000/webservice/php/biere/'+id+"/note", {
            method:"PUT",
            body:JSON.stringify(inputRating),
            headers : entete
        })
            .then(response=>response.json())
            .then(data=>{
                console.log(data);
            })
    };

    let message='';
    let formulaireComment="";
    let formulaireRating="";
    if(estConnecte){
        message = <p>Connecté en tant que : {courriel} </p>
        formulaireComment = <form onSubmit={handleSubmitComment} className="commentForm">
                                <h3>Ajouter un commentaire : </h3>
                                <label for="commentaire"></label>
                                <textarea name='commentaire' onChange={handleChange}></textarea>
                                <button type='submit'>Ajouter</button>
                            </form>

        formulaireRating = <form onSubmit={handleSubmitRating} className="ratingForm">
                                <h3>Ajouter une note : </h3>
                                <div>
                                <input type="radio" name="note" value="1" onMouseDown={handleChange}></input>
                                <input type="radio" name="note" value="2" onMouseDown={handleChange}></input>
                                <input type="radio" name="note" value="3" onMouseDown={handleChange}></input>
                                <input type="radio" name="note" value="4" onMouseDown={handleChange}></input>
                                <input type="radio" name="note" value="5" onMouseDown={handleChange}></input>
                                <input type="radio" name="note" value="6" onMouseDown={handleChange}></input>
                                <input type="radio" name="note" value="7" onMouseDown={handleChange}></input>
                                <input type="radio" name="note" value="8" onMouseDown={handleChange}></input>
                                <input type="radio" name="note" value="9" onMouseDown={handleChange}></input>
                                <input type="radio" name="note" value="10" onMouseDown={handleChange}></input>
                                </div>
                                <button type='submit'>Ajouter</button>
                            </form>
    }

    // setCommentaires(evt){
    //     console.log(evt.target.value);
    //     let commentaire = evt.target.value;
    //     let valide;
    //     if(commentaire !=""){
    //         valide = true;
    //     }else{
    //         valide =false;
    //     }

    //     this.setState({
    //         commentaireValide : valide,
    //         commentaire : commentaire
    //     })
    // }

    return (

        <>
        <section className='title'>
            <h1>{produit.nom}</h1>
            <strong>{message}</strong>
        </section>
        <section className='main'>
            <img src='https://picsum.photos/450/300' alt='biere_image' className='beerImage'></img>

            <section className='details'>
                <section className='description'>
                    <strong>Description : </strong>                
                    <p>{produit.description}</p>
                </section>
                
                <section className='note'>
                    <strong>Note : </strong>
                    <p>{note}</p>
                </section>
            </section>
        </section>
        <section className='comments'>
            <section className='beerComments'>
            <h3>Commentaires</h3>
                {commentaires.map(unCommentaire=>
                    <p><IoBeer/> - {unCommentaire.commentaire}</p>
                )}
            </section>

            <section className='formulaire'>
                {formulaireComment}
            </section>
            <section className='rating'>
                {formulaireRating}
            </section>
        </section>


        
        
        
        

        </>

    );
}