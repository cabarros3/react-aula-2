async function getAddress(cep: string){
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    console.log(url);

    const response = await fetch(url);
    console.log(response);

    const json = await response.json();
    console.log(json);
}

getAddress("51270380");