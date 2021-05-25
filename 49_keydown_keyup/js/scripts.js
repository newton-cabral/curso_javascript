//Keydown

document.addEventListener("keydown", function (event) {
  console.log(event.key);


  if (event.key === "Enter") {
    console.log("Apertou Enter");
    }

});

//Keyup

document.addEventListener("Keyup", function(eee) {

 if (eee.key == "Enter"){
    console.log("Soltou o Enter");
  }
});