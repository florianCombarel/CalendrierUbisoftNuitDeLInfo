
window.onload = function() {
  let body = document.querySelector("body");
  document.querySelector(".test").addEventListener("click", checkDate);
  document.querySelector(".return").addEventListener("click", getCookie);
}
//document.getElementById("test").addEventListener("click", checkDate);
addCookie("1");

function addCookie(j) {
  document.cookie = "dateOpen"+j+"= true";

}

function checkDate(event){
  let date = new Date();
  let month = date.getMonth();
  let jour = date.getDate();
  if(month==11){
    if(event.id<=jour){
      if(notOpen){ //TODO
        addCookie(j);
        //TODO openCase
      }
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
    console.log(decodedCookie);
    let ca = decodedCookie.split(';');
    console.log(ca);
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
}
