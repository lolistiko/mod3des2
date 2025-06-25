const imgChangeStyle = document.querySelector("#imgChangeStyle");
const btnChangeStyle = document.querySelector("#btnChangeStyle");

btnChangeStyle.addEventListener("click", function (event) {
  if (imgChangeStyle.style.border == "2px solid yellow") {
    imgChangeStyle.style.border = "none";
    btnChangeStyle.innerHTML = "Explota su KI";
  } else {
    imgChangeStyle.style.border = "2px solid yellow";
    btnChangeStyle.innerHTML = "vuelve a su estado";
  }
});
