function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar<b>";  
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar"); 
}

function redirecionar(){
    window.open("https://globallab.org/en/#.X82LIs1KjIU");
    //window.location.href = "https://globallab.org/en/#.X82LIs1KjIU"; 
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passa o mouse"; 
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"; 
    //alert("trocar texto"); 
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove2").innerHTML = "Passe o mouse aqui"; 
}

function load(){
    alert("Pagina carregada!"); 
}

function funcaoChange(elemento){
    console.log(elemento.value); 
}
/*
function soma (n1, n2){
    return n1 + n2; 
};
*/
/*
function validarIdade(idade){
    var validar; 
    if(idade >= 18){
     validar = true; 
    }else{
        validar = false; 
    }
    return validar; 
}
var idade = prompt("Qual sua idade?"); 
console.log(validarIdade(idade))

//alert(soma(5,10));
*/





/*
var d = new Date(); 
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay()); 
*/





/*
var count; 
for (count=0; count <= 5; count++){
    alert(count); 
}
*/

/*
var count = 0; 
while(count <= 5){
    console.log(count); 
    alert(count); 
    count++;
};
*/



/*
var idade = prompt("qual sua idade");
 
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/


//var frutas = [{nome:"maca", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]; 
//console.log(frutas);
//alert(frutas[1].nome);

/*
var fruta = {nome:"maca", cor:"vermelha"}; 
console.log(fruta.nome);
alert(fruta.cor); 
*/
// var lista = ["maçã","pêra","laranja"];
//lista.push("uva");
// lista.pop();  


// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join(" | "));

// var nome = "Emanoel Peixoto"; 
// var idade = 21; 
// var idade2 = 10; 
// var frase = "o japao e o melhor time do mundo"; 
// alert(nome + " tem " + idade + " anos ");
// alert( idade + idade2);
// console.log(nome); 
// console.log(idade + idade2);
// console.log(frase.toUpperCase()); 
// alert(frase.replace("japao", "Brasil"));