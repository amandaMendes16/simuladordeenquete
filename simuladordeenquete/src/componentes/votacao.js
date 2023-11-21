import React, { useState } from 'react'
function Votacao() {
    const [morango, setMorango] = useState('');
    const [chocolate, setChocolate] = useState('');
 
    const VotacaoDoSorvete = () => {

        if (morango = 1){
            alert ("Sorvete sabor morango foi votado!")
        }
        else if (chocolate = 1){
            alert ("Sorvete sabor chocolate foi votado!")
        }

    };
 
 
return (
    <div>
        <input
        type="number"
        value={nota1}
        onChange={(e) => setNota1(e.target.value)}
        placeholder="Digite a primeira nota: "
        />
        <input
        type="number"
        value={nota2}
        onChange={(e) => setNota2(e.target.value)}
        placeholder="Digite a segunda nota: "
        />
        <input
        type="number"
        value={nota3}
        onChange={(e) => setNota3(e.target.value)}
        placeholder="Digite a terceira nota: "
        />
        <button onClick={VotacaoDoSorvete}>Votar</button>
        {Votacao !==null && <p>Sua média é: {Votacao}</p>}
    </div>
)
}
 
export default Votacao;