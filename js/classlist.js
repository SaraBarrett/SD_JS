let myLis = document.getElementsByTagName("li");

function changeHighlight() {
  for (li of myLis) {
    if (li.classList.contains("highlight")) {
      li.classList.remove("highlight");
    } else {
      li.classList.add("highlight");
    }
  }
}
