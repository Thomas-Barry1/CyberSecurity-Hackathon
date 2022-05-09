import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
var elements = document.getElementsByClassName("drop-js");

for (var index = 0; index < elements.length; index++) {
  elements[index].addEventListener("click", changeDrop);
}
document.getElementById("addBtn").addEventListener("click", addFields);

function changeDrop() {
  document.getElementById("dropdownMenuButton1").innerText = this.innerText;
  return;
}

function addFields() {
  var elem = document.querySelector("#emailAndBtn");
  var elemClone = elem.cloneNode(true);
  elemClone.id = "#emailAndBtn2";
  elem.after(elemClone);
  return;
}

document.querySelector("#formSubmit").addEventListener("click", submit);

function submit() {
  const encodedParams = new URLSearchParams();
  const user = document.getElementById("staticEmail2").value;
  encodedParams.append("username", String(user));
  encodedParams.append("target_count", "10");

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Host": "social-scanner.p.rapidapi.com",
      "X-RapidAPI-Key": "f12d0742e8msh3bc11e1c22b35fbp174ae3jsn50469845b8c2",
    },
    body: encodedParams,
  };
char linkArray[1000];
  fetch("https://social-scanner.p.rapidapi.com/social-scan/", options)
    .then((response) => response.json())
     .then((response) => String jsonString)
      ObjectMapper mapper = new ObjectMapper();
      ObjectNode node = mapper.readValue(jsonString, ObjectNode.class);
      if(node.has("https")) {
         System.out.println("link" + node.get("https"));
        linkArray[1] = node.get("https");
      }
   
    .then((response) => console.log(response)) 
    .catch((err) => console.error(err));

  return;
}
