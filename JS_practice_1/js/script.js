function array_Ineration() {
  var arrRound = [1, true, "JavaScript"];

  var result = "<table><tr>";
  for(var idx in arrRound){
    result += "<td>" + arrRound[idx] + "</td>";
  }
  result += "</tr></tabel>";

  document.write(result);
}
