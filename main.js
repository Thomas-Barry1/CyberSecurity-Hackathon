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

  fetch("https://social-scanner.p.rapidapi.com/social-scan/", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(Object.entries(response)[0]);
    })
    .catch((err) => console.error(err));

  return;
}

// var jsonArray = [response];
//       jsonArray.forEach((jsonArrayObj) => {
//         var jsonData = JSON.parse(jsonArrayObj.valueInput);
//         jsonData.data.forEach(({ https }) => console.log(https));
//       });

// var jsonArray = [response.json()];
//  let https = response[0].valueInput;
//  https = JSON.parse(https);
//  https.data.forEach((value) => {
//    console.log(value.https, value.id);
//  });

// var arr = [
//   {
//     assetName: "LCT",
//     assetValue: "",
//     typeValueInput: "select",
//     valueInputSelect: null,
//     required: true,
//     valueInput:
//       '{"data":[{"name":"name1","id":"12"},{"name":"name2","id":"13"},{"name":"name3","id":"14"}]}',
//   },
// ];

// arr.forEach((arrObj) => {
//   var jsonData = JSON.parse(arrObj.valueInput);
//   jsonData.data.forEach(({ name }) => console.log(name));
// });
