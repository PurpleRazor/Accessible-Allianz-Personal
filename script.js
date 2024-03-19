function switchToNeuroMode() {
  let container = document.querySelector(".container");

  if (container.classList.contains("neuro")) {
    container.classList.remove("neuro");
  } else {
    container.classList.add("neuro");
  }
}
let button = document.querySelector("#neuroMode");
button.addEventListener("click", switchToNeuroMode);
