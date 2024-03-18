function SwitchToNeuroMode() {
  let container = document.querySelector(".container");

  if (container.classList.contains("neuro")) {
    container.classList.remove("neuro");
  } else {
    container.classList.add("neuro");
  }
}
let NeuroMode = document.querySelector("button");
NeuroMode.addEventListener("click", SwitchToNeuroMode);
