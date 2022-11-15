/**********************************/
/* 1. Botão
/**********************************/

function toggle() {
var x = document.getElementById("hidden");
        if (x.style.display === "none") {
            x.style.display = "flex";
        }    else {
            x.style.display = "none";
     }
}

/**********************************/
/* 2. Login
/**********************************/

function loginBoxToggle() {
var y = document.getElementById("login");
    if (y.style.display === "none") {
        y.style.display = "block";
    }
        else {
            y.style.display = "none";
    }
}

/** Caixa de login some ao clicar na área desfocada **/

window.onclick = function(event) {
    if (event.target == login) {
        login.style.display = "none";
    }
}