function redirecionar(){
 window.open("https://web.dio.me/track/html-web-developer?tab=path");
 //window.location.href = " https://web.dio.me/track/html-web-developer?tab=path "
}

function clicou(){
    document.getElementById("obg").innerHTML = "<b> Obrigado por clickar </b>";
    //consele.log(document.getElementById("agradeçimento"));
    //alert("obrigado por clickar");
}

function trocar(elemento){
    //document.getElementById("mm").innerHTML = "obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mm").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";
}

function LD(){
alert("pagina carregada");
}

function fc (elemento){
 console.log(elemento.value)
}
/*
function soma(n1, n2){
 return n1 + n2;
} 

//alert (soma (5, 10));

function validaIdade(idade){
    if(idade >= 18){
    var validar = true
    }else{
        validar = false
    }
    return validar;

}

var idade = prompt("qual é a sua idade?")
console.log(validaIdade(idade));




var D = new Date ();
alert(D.getMinutes());
alert(D.getDay());
alert(D.getHours());

var count = 0;
for( count=0; count <=5; count++){
alert(count);
};

var count = 0;
while (count <= 5) { 
 console.log (count);
 alert (count);
 count = count + 1;
};

var id= prompt ("Qual é a sua idade?");
if (id >= 18){
 alert("maior de idade");
}else{
    alert("menor de idade");
   };

var fts = [{name:"maça", cor:"vermelha"}, {name:"pera", cor:"verde"}]
console.log(fts);
alert(fts[1].name);

var ft = {name:"maça", cor:"vermelha"};
console.log(ft.cor);
alert(ft.name);
*/
