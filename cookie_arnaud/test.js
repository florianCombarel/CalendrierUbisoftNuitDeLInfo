
window.onload = function() {
  let body = document.querySelector("body");
  document.querySelector(".test").addEventListener("click", checkDate);
  document.querySelector(".return").addEventListener("click", getCookies);
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
      if(notOpen){ //TODO
        addCookie(event.target.id);
        //TODO openCase
    //  }
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
    return "";
}

function checkCookie(no) {
    var cookie = getCookie("username"+no);
    if (cookie != "") {
      return true;
    } else {
      return false;
    }
}
