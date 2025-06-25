let totalQty = 0;
const btnVerify = document.querySelector("#btnVerify");
const input1 = document.querySelector('input[name="input1"]');
const input2 = document.querySelector('input[name="input2"]');
const input3 = document.querySelector('input[name="input3"]');

const msg = document.querySelector(".msg");

btnVerify.addEventListener("click", function (event) {
  totalQty =
    parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value);

  if (isNaN(totalQty)) {
    msg.innerHTML = "Rellena todos los campos para que puedan pelear!";
    msg.style.color = "red";
    return;
  }

  if (totalQty <= 0) {
    msg.innerHTML = "Debe Ingresar al menos una energia!";
    msg.style.color = "red";
    return;
  }

  if (totalQty > 10) {
    msg.innerHTML =
      "No piloto!!! es mucho poder!! solo puedes ingresar hasta 10 energias!";
    msg.style.color = "red";
    return;
  }

  msg.innerHTML = `Llevas ${totalQty} Energias`;
  msg.style.color = "#143D60";
});
