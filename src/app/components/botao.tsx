'use client';

export function Botao(){
    function click(){
        alert("Olá")
    }

    return(
        <div className="border pt-5 pb-5 ml-5">
            <div className="font-bold text-lg p-5">
                <span>Questão 3</span>
            </div>
            <div>
                <button className="m-5 p-3 h-10 w-28 bg-red-200" onClick={click}>Clique aqui!</button>
            </div>
        </div>
        
    )
}