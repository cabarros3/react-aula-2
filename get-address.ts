// import { error } from "console";

// async function getAddress(cep: string){
//     const url = `https://viacep.com.br/ws/${cep}/json/`;
//     // console.log(url);

//     try {
//         const response = await fetch(url);
//         if(!response.ok){
//             throw new Error(`Response status: ${response.status}`);
//         }

//     }

//     // console.log(response);

//     const json = await response.json();
//     console.log(json);
// } catch (error){
//     console.error(error.message);
// }

// getAddress("51270380");
// console.log("restante do código...")

export async function getAddress(cep: string) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
  }

