const pre = document.querySelector("div#pre");
const pos = document.querySelector("div#pos");
const inputPass = document.querySelector("input#txtpass")
const btnConect = document.querySelector("input#btn-conect")
let pass = "senha"
let chance = 0
const gray = "#ccc"

function select() {
    pre.style.visibility = "hidden";
    pos.style.visibility = "visible";
}

function connect() {
    if (inputPass.value === pass) {
        swal("Correto!", "Seja bem vindo!", "success");
    } else {
        chance += 1
        if (chance < 3) {
            swal("Senha incorreta!", "Tente novamente.", "warning");
        } else {
            swal("Bloqueado!", "Tente novamente mais tarde.", "error");
            btnConect.disabled = true
            btnConect.style.background = gray
            btnConect.style.cursor = "auto"
        }
    }
    inputPass.value = ""
    inputPass.focus()
}