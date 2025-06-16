let botao = window.document.getElementById("volta_ao_topo");

window.addEventListener('scroll', rolou);

function rolou() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        botao.style.display = "block";        
    } else {
        botao.style.display = "none";
    }
}

botao.addEventListener("click", clicou);

function clicou() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}