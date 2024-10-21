"use client";

import { getAddress } from "../../../get-address";
import { useState } from "react";


export function Botao() {

  let address = "Rua teste"

  const [isAddress, setIsAddress] = useState(false)

  async function HandleGetAddress() {
    try{
      const result = await getAddress("51270380");
      address = result
      console.log(result);
    } catch (error){
      alert("Ocorreu um erro ao obter o endereço")
    }
    
  }

  return (
    <div className="border pt-5 pb-5 rounded-3xl shadow-xl mb-10">
      <div className="font-bold text-lg p-5">
        <span>Questão 3</span>
      </div>
      <div className="flex flex-row justify-center ">
        <button
          className="m-5 p-8 h-10 w-36 bg-blue-300 shadow-md font-semibold rounded-lg flex flex-row items-center text-lg"
          onClick={HandleGetAddress}
        >
          obter endereço
        </button>
        
      </div>
      <div className="p-5">
      <span>endereço: {address}</span>
      </div>
    </div>
  );
}
