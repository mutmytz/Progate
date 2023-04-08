document.getElementById("btn").addEventListener("click",tampilkanWaktu);

function tampilkanWaktu(){
    document.getElementById("hasil").innerHTML=Date()
}


const x=document.getElementById("btn1");
x.addEventListener("click",firstFunction);
x.addEventListener("click",secondFunction);

function firstFunction(){
    alert("Hai i came from first function");
}
function secondFunction(){
    alert("Hai i came from second function");
}

const y=document.getElementById("btn2");
y.addEventListener("mouseover",fungsiPertama);
y.addEventListener("click",fungsiKedua);
y.addEventListener("mouseout",fungsiKetiga);

function fungsiPertama(){
    document.getElementById("hasil1").innerHTML +="Mouse Over <br>";
}
function fungsiKedua(){
    document.getElementById("hasil1").innerHTML +="Mouse Click <br>";
}
function fungsiKetiga(){
    document.getElementById("hasil1").innerHTML +="Mouse Out <br>";
}