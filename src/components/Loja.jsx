import React, { useEffect, useState } from "react";

export default function Loja(){
    const [produtos, setProdutos]= useState([])

    useEffect(() =>{
        fetch("https://fakestoreapi.com/products?limit=6") 
        .then( (resposta) => resposta.json()) 
        .then( (dados) => setProdutos(dados))
        .catch(() => console.log('Falha na requisição!'))
    },[])
     
    return(
        <div>
            <h1>Componente de Loja</h1>
            { produtos.map( (produto) => (
                <div key={produto.id}>
                    <img width="150" src={produto.image} alt={produto.title} />
                    <p>{produto.title}</p>
                </div>
            )) }
        </div>
    )
}