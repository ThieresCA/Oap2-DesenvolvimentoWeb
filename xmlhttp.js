// 1. Cria um novo objeto XMLHttpRequest
let xhr = new XMLHttpRequest();

// 2. configurando o: GET-request for the URL /article/.../load
xhr.open('GET', '/article/xmlhttprequest/example/load');

// 3. Envia a solicitação pela rede
xhr.send();

// 4. Isso será chamado assim que a resposta for recebida
xhr.onload = function() {
  if (xhr.status != 200) { // Caso a resposta for diferente de 200 a linha 13 será chamada
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // será lançado um erro 404: Not Found
  } else { // caso a resposta seja 200
    alert(`Done, got ${xhr.response.length} bytes`); // então passaremos a resposta do servidor
  }
};

// aqui temos a função de mostrar o quanto está sendo baixado da resposta
xhr.onprogress = function(event) {
  if (event.lengthComputable) { //caso o tamanho da resposta possa ser computado, o resultado será
    //a linha abaixo
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {// se não puder ser computado apenas mostraremos o total que estamos recebendo
    alert(`Received ${event.loaded} bytes`);
  }
};

// caso o Request não seja bem sucedido lançameros o erro de Request Failed
xhr.onerror = function() {
  alert("Request failed");
};