function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obirgado por clicar!</b>";
    console.log(document.getElementById("agradecimento"));
   // alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.youtube.com/");
    //window.location.href = "https://www.youtube.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar Texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o Mouse aqui";
    elemento.innerHTML = "Passe o Mouse aqui";
}

function load(){
    alert("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

//alert(soma(5, 10));
//alert(setReplace("Vai Japão!", "Japão", "Brasil"));


var validar = 0;
function valida(idade){
    //var validar
    if(idade >= 18){
        validar = true;
    } else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
//valida(idade);
console.log(valida(idade));

*/

/*var d = new Date;
alert(d.getMonth()+1);
*/


/*var cont;

for(cont = 0; cont <= 5; cont++){
    //console.log(cont);
    alert(cont);
};
*/


/*var count = 0;

while(count <= 5){
    console.log(count);
    count++;
};
*/

/*var idade = prompt("Qual a sua Idade?");

if(idade >= 18){
    alert("Maior de Idade");
} else{
    alert("Menor de  Idade");
};
*/

/*var frutas = [{nome:"Manga", cor:"Laranja"}, {nome:"Abacate", cor:"verde"}]
console.log(frutas);

alert(frutas[1].nome);
*/

/*var fruta = {nome:"Manga", cor:"Laranja"}
console.log(fruta.nome);
alert(fruta.cor);
*/


//var lista = ["maçã", "pera", "manga"];
//lista.push("uva");
//lista.pop();
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));



/*var nome = "André Felipe";
var n1 = 24;
var n2 = 10;
var frase = "Japão é a melhor seleção do mundo!"
//alert(nome +" tem "+idade+" anos");
//alert(idade + idade2);

console.log(nome);
console.log(n1 + n2);
console.log(frase.toUpperCase());*/