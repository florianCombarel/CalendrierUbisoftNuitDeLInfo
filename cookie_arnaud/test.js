
window.onload = function() {
  let body = document.querySelector("body");
  document.querySelector(".test").addEventListener("click", checkDate);
  document.querySelector(".return").addEventListener("click", getCookies);
  for(let i = 1; i<25;i++){
    let monCheck = checkCookie(i);
      if(monCheck=="true"){
        //TODO put gif open
      }
  }
}
//document.getElementById("test").addEventListener("click", checkDate);


function addCookie(j) {
  document.cookie = "dateOpen"+j+"= true";

}

function checkDate(event){
  console.log(event);
  let date = new Date();
  let month = date.getMonth();
  let jour = date.getDate();
  console.log(event.target.id);
  if(month==11){
    if(event.target.id<=jour){
      //if(notOpen){ //TODO
        addCookie(event.target.id);
        //TODO openCase
      //}
    }
  }
}

function getCookies() {
    //let name = dateJ + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    console.log(decodedCookie);
    let ca = decodedCookie.split(';');
    console.log(ca);
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        //if (c.indexOf(name) == 0) {
        //    return c.substring(name.length, c.length);
        //}
    }
}

function getCookie(dateJ) {
    let name = dateJ + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(no) {
    var cookie = getCookie("dateOpen"+no);

    if (cookie != "") {
      console.log("oui");
      return true;
    } else {
      console.log("non");
      return false;
    }
}
