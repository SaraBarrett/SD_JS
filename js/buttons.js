let parentEl = document.querySelector("#container");

function addHundred() {
  for (let i = 0; i < 100; i++) {
    let myBtn = document.createElement("button");
    myBtn.innerText = i;
    parentEl.appendChild(myBtn);
  }
}
