console.log("se carga el codigo");

window.addEventListener("DOMContentLoaded", (event)=> {
    console.log("DOM complement cargado y procesado");

    const menubtn=document.getElementById("menu");
    const nav=document.querySelector("nav");

    menubtn.addEventListener("click", (event)=>{
        menubtn.classList.toggle("salir");
        nav.classList.toggle("visible");
        body.classList.toggle("no-scroll");
        
    });
});