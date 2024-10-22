"use client";

import { getAddress } from "../../../get-address";
import { useState } from "react";

export function Botao() {
  const [address, setAddress] = useState({
    cep: "",
    logradouro: "",
    complemento: "",
    unidade: "",
    bairro: "",
    localidade: "",
    uf: "",
    estado: "",
    regiao: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: "",
  });

  const [inputValue, setInputValue] = useState("");

  async function HandleGetAddress() {
    try {
      const result = await getAddress(inputValue);
      setAddress(result);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="border pt-5 pb-5 rounded-3xl shadow-xl mb-10">
      <div className="font-bold text-lg p-5">
        <span>Questão 3</span>
      </div>
      <div>
        <input
          className="border mx-5"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite o cep"
          type="text"
        />
      </div>
      <div className="flex flex-row justify-center ">
        <button
          className="m-5 p-8 h-10 w-36 bg-blue-300 shadow-md font-semibold rounded-lg flex flex-row items-center text-lg"
          onClick={HandleGetAddress}
        >
          Obter endereço
        </button>
      </div>
      <div className="flex flex-col justify-center p-3">
        <p>
          <strong>CEP:</strong> {address.cep}
        </p>
        <p>
          <strong>Logradouro:</strong> {address.logradouro}
        </p>
        <p>
          <strong>Bairro:</strong> {address.bairro}
        </p>
        <p>
          <strong>Cidade:</strong> {address.localidade}
        </p>
        <p>
          <strong>Estado:</strong> {address.uf}
        </p>
      </div>
    </div>
  );
}
