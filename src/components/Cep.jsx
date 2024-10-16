import React, { useEffect, useState } from "react";

export default function Cep() {
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");

  useEffect(() => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resposta) => resposta.json())
      .then((data) => setCidade(data.localidade))
      .catch(() => console.log("Falha na requisição!"));
  }, [cep]);

  return (
    <>
      <div>
        <label htmlFor="Cep">Digite o CEP:</label>
        <input type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite o CEP"
        />
      </div>

      <div>
        <label htmlFor="Cidade">Cidade:</label>
        <input type="text" value={cidade} readOnly />
      </div>
    </>
  );
}