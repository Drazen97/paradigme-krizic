let vrijednost = "X";
let ime = "";
var matrix = [];
let botun = document.createElement("button");
botun.innerText = "Nova igra";
botun.style.width = "50px";
botun.style.height = "50px";
botun.setAttribute("style", "margin-left: 400px;");
document.body.appendChild(botun);
var nova = function() {
  document.write("");
  document.close();
  matrix = [];
  for (var i = 0; i < 3; i++) {
    matrix[i] = new Array(3);
  }
  for (i = 0; i < 3; i++) {
    document.write("<br>");
    for (var j = 0; j < 3; j++) {
      ime = i + "" + j + "botun";
      let newButton = document.createElement("button");
      newButton.setAttribute("id", ime);
      matrix[i][j] = ime;
      newButton.className = "myClassName";
      newButton.innerText = "clickMe";
      newButton.style.width = "120px";
      newButton.style.height = "80px";
      newButton.addEventListener(
        "click",
        function() {
          if (newButton.innerText === "clickMe") {
            matrix[Number(newButton.id[0])][
              Number(newButton.id[1])
            ] = vrijednost;
            newButton.innerText = vrijednost;
            provjera(Number(newButton.id[0]), Number(newButton.id[1]));
            if (vrijednost === "X") {
              vrijednost = "O";
            } else {
              vrijednost = "X";
            }
          }
        },
        false
      );
      document.body.appendChild(newButton);
    }
  }
};
botun.addEventListener("click", nova);
console.table(matrix);
var provjera = function(i, j) {
  //provjeravamo samo stupac i redak gdje je novostavljeni znak
  if (i !== j && Math.abs(i - j) !== 2) {
    provjeri_redak(i);
    provjeri_stupac(j);
  } else {
    provjeri_redak(i);
    provjeri_stupac(i);
    provjeri_dijagonale(i, j);
  }
  //document.body.appendChild(botun);
};
var provjeri_redak = function(a) {
  if (
    matrix[a][0] === vrijednost &&
    matrix[a][1] === vrijednost &&
    matrix[a][2] === vrijednost
  ) {
    console.log("igra je gotova ,pobijedio je igrac " + vrijednost);
    //document.body.removeChild(document.body);
    document.write("");
    document.close();
    nova();
  }
};
var provjeri_stupac = function(a) {
  if (
    matrix[0][a] === vrijednost &&
    matrix[1][a] === vrijednost &&
    matrix[2][a] === vrijednost
  ) {
    console.log("igra je gotova ,pobijedio je igrac " + vrijednost);
    //document.body.removeChild(document.body);
    document.write("");
    document.close();
    nova();
  }
};
var provjeri_dijagonale = function(a, b) {
  if (
    matrix[0][0] === vrijednost &&
    matrix[1][1] === vrijednost &&
    matrix[2][2] === vrijednost
  ) {
    console.log("igra je gotova ,pobijedio je igrac " + vrijednost);
    //document.body.removeChild(document.body);
    document.write("");
    document.close();
    nova();
  }
  if (
    matrix[0][2] === vrijednost &&
    matrix[1][1] === vrijednost &&
    matrix[2][0] === vrijednost
  ) {
    console.log("igra je gotova ,pobijedio je igrac " + vrijednost);
    //document.body.removeChild(document.body);
    document.write("");
    document.close();
    nova();
  }

  //nova();
};
