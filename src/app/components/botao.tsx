"use client";

export function Botao() {
  function click() {
    alert("Olá");
  }

  return (
    <div className="border pt-5 pb-5 rounded-3xl shadow-xl mb-10">
      <div className="font-bold text-lg p-5">
        <span>Questão 3</span>
      </div>
      <div className="flex flex-row justify-center ">
        <button
          className="m-5 p-5 h-10 w-36 bg-blue-300 shadow-md font-semibold rounded-lg flex flex-row items-center text-lg"
          onClick={click}
        >
          Clique aqui!
        </button>
      </div>
    </div>
  );
}
