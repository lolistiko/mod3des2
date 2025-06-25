const password1 = "911";
const password2 = "714";
let selectedPassword = "";

const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const select3 = document.querySelector("#select3");

const btnValidar = document.querySelector("#btnValidar");
const msg = document.querySelector("#msg");

btnValidar.addEventListener("click", function (event) {
  selectedPassword = select1.value + select2.value + select3.value;

  if (selectedPassword === password1) {
    msg.innerHTML = "Password 1 listo!!!!!";
    msg.style.color = "green";
    return;
  }

  if (selectedPassword === password2) {
    msg.innerHTML = "Password 2 ok!...lo lograste!!!";
    msg.style.color = "green";
    return;
  }

  msg.innerHTML = "nop... te equivocaste!!!";
  msg.style.color = "red";
});
