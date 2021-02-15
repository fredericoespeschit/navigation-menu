// document.getElementById("titulo").innerHTML =  "Sejam bem vindes"; //Manipular o html usando javascript (elemento html com ID)

//window.alert("Mensagem de exemplo"); //Mostrar dados para o usuario, atraves da janela.
// console.log("A mensagem que eu inserir aqui, aparece-rá no console") //Exibir mensagem no console do navegador


//Condicional If, else if, else com js
// var hora = 13;

// if(hora < 12){
//     console.log("Bom dia")
// }else if(hora >= 12 && hora < 18){
//     console.log("Boa tarde")
// } else {
//     console.log("Boa noite")
// }

 //var, let e const
 //var: Hoisting: e enviada para o escopo geral da tela
 //let:  usada apenas no escopo que esta sendo definida
 //vatagem de usar o let, ajuda no consumo da memoria por exemplo, pq a varivel so e utilizada em um escopo especifico, ou seja, quando finaliza o escopo, ela não fica sendo usada mais, e finalizada
 //const: não pode modificar o valor da mesma. muito util em array e objetovs


 //Tipos de objetivos existentes em Js
//  var nome = "Frederico";
//  var idade = 28;
//  var ativo = true;
//  var cidade;

//  console.log(typeof nome, 
//              typeof idade, 
//              typeof ativo, 
//              typeof cidade);


// var titulo = document.getElementById("titulo");
// titulo.innerHTML = ("Sejam todes bem vindes!");

// function alterar(){
//     document.getElementById("titulo").innerHTML = ("Sejam bem vindes!");
// }

// alterar();

// function inserir(campoInput){
//     document.getElementById("campoInput").value = campoInput;
// }

// inserir("sexy");


// function button(){
//     document.getElementById("campoInput").value = ("enviou");
// }

//mudança de estilo



//Abre e fecha a lateral

// function menu() {
//     var controle = document.getElementById("menu-opener").innerHTML = ("width:200px;");
//     if (controle == 200) {
//         document.getElementById("menu-opener").innerHTML = ("width:0px;");

//     } else {
//         document.getElementById("menu-opener").innerHTML = ("width:200px;");
//     }
    
// }

function azul(){
    limpar();
    document.getElementById("titulo").classList.add("azul");
}
function vermelho(){
    limpar();
    document.getElementById("titulo").classList.add("vermelho");
}
function verde(){
    limpar();
    document.getElementById("titulo").classList.add("verde");
}

function limpar(){
    document.getElementById("titulo").classList.remove("azul");
    document.getElementById("titulo").classList.remove("vermelho");
    document.getElementById("titulo").classList.remove("verde");
}