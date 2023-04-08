// getElementById
document.getElementById("belajar").innerHTML="Selamat Pagi";
let x=document.getElementById("belajar2")
x.innerHTML="hallo apa kabar kalian semua";

// get element By class name
const y=document.getElementsByClassName("demo"); // array dari class name
document.getElementById("hasil_demo").innerHTML=
"Anggota pertama dari class demo adalah : "+y[1].innerHTML;

//get element By query selector
const z=document.querySelectorAll("p.demo"); // array dari query p.demo
document.getElementById("hasil_query").innerHTML=
"Anggota pertama dari query inii adalah : "+z[0].innerHTML;

//change value of an attribute
document.getElementById("daun").src="daun2.png";

function validateForm(){
    let x =document.forms["myForm"]["fname"].value;
    if(x==""){
        alert("Tidak boleh kosong")
        return false;
    }
}

