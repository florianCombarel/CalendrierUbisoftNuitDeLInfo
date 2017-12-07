function test() {
  document.getElementById("test").addEventListener("click", checkDate);

}

function addCookie(j) {
  document.cookie = "dateOpen"+j+"= true";
}

function checkDate(event){
  let month = getMonth();
  let jour = getDate();

  if(month==11){
    if(event.id<=jour){
      
      addCookie(j);

    }
  }

}
