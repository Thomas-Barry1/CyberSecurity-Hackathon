document.getElementById("addBtn").addEventListener("click", addFields);
var elements = document.getElementsByClassName("drop-js");
for (var index = 0; index < elements.length; index++) {
  elements[index].addEventListener("click", changeDrop);
}

function changeDrop() {
  document.getElementById("dropdownMenuButton1").innerText = this.innerText;
  return;
}

function addFields() {
  const div = document.createElement("div");
  var tag = document.createElement("p");
  var text = document.createTextNode("Tutorix is the best e-learning platform");
  tag.appendChild(text);
  var element = document.getElementById("new");
  element.appendChild(tag);
  return;
}
