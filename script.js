function clickcard(id) {
document.getElementById(id).classList.toggle("disabled");
}

function resetall() {
  let images = document.getElementsByTagName("img");
  for (i of images) {
    i.classList.remove("disabled");
  }
}