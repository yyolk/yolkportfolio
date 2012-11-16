function genGarbage(count){

  var key ="", random;
  var letters = "abcdefghijklmnopqrstuvwxyz ";
  letters+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  letters+= "{}[],./?<>()'!@#$%^&*";
  for (var i = 0; i<count; i++){
    if (i !== 0 && i % 7 === 0){
      key+=" ";
    }
    random = Math.floor(Math.random() * letters.length);
    key += letters.charAt(random);
  }
  return key;
}


function showGarbage(){

  var ckeys = ["one", "two", "three", "four", "five", "six"];
  //var current = document.getElementById("miniwindow").innerHTML;
  var miniwindow = document.getElementById("miniwindow");
  var next = document.createElement("span");
  next.innerHTML = "<span class='" + ckeys[Math.floor(Math.random() * ckeys.length)] + "'>" + genGarbage(Math.floor(Math.random()*70)) + "</span>";
  miniwindow.appendChild(next);
  //current += "<span class='" + ckeys[Math.floor(Math.random() * ckeys.length)] + "'>" + next + "</span>";
  //document.getElementById("miniwindow").innerHTML = current;

}

function scrollBottom(){
  window.scrollTo(0, document.getElementById("miniwindow").scrollHeight);
}

setInterval("showGarbage()", 10);
//setInterval("scrollBottom()", 15);

