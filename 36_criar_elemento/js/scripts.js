// inserir o elemento no body
var novoParagrafo = document.createElement("p"); // criou a tag p
// insere o conteudo no paragrafo
var texto = document.createTextNode("Este é o conteúdo do paragráfo");
// inserindo o texto
novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector("body");

console.log(body);
// inserindo no corpo do html
body.appendChild(novoParagrafo);
 
// inserir em um container
// mapeou a div
var container = document.getElementById("container");

console.log(container);
// cria o elemento 
var el = document.createElement("span");
// inserindo o texto no span
el.appendChild(document.createTextNode("texto do span"));

console.log(el);
// inserindo dentro do container
container.appendChild(el);