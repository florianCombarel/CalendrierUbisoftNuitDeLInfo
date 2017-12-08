
window.onload = function() {
  let body = document.querySelector("body");
  let cases =document.querySelectorAll(".case");
  for (var i = 0; i < 24; i++) {
    cases[i].addEventListener("click", checkDate);
    if(checkCookie(i)==true){
      //console.log("checked"+document.getElementById(i));
      document.getElementById(i).src="./images/Ouvert.png";
    }
  }
  //for(let currentCase in cases) {
    //currentCase.on("click", checkDate);
//  }
  document.querySelector(".return").addEventListener("click", getCookies);
  for(let i = 0; i<24;i++){
    let monCheck = checkCookie(i);
      if(monCheck=="true"){
        //console.log(document.getElementById(i));
        document.getElementById(i).src="./images/Ouvert.png";
      }
  }
}
//document.getElementById("test").addEventListener("click", checkDate);


function addCookie(j) {
  document.cookie = "dateOpen"+j+"= true";
  //console.log(j);
}

function checkDate(event){
  //console.log(event);
  let date = new Date();
  let month = date.getMonth();
  let jour = date.getDate();
  //console.log(event.target.id);
  if(month==11){
    if(event.target.id<=jour){
      if(checkCookie(event.target.id)==false){ 
        faireAction(event.target.id);
        addCookie(event.target.id);
        event.target.src="./images/Ouvert.png"
      } else {
        event.target.src="./images/Ouvert.png"
      }
    }
  }
}

function faireAction(id) {
  switch(id){
    case 1:
         window.open('https://giphy.com/gifs/cat-funny-QLqKfeTQ4r8hq');
         break;
    case 2:
        window.open('https://www.ubisoft.com/fr-fr/game/just-dance-2018');
        break;
    case 3:
        window.open('https://images6.alphacoders.com/842/842585.jpg');
        break;
    case 4:
        window.open('https://www.ubisoft.com/fr-fr/event/world-in-conflict-giveaway/#213311210');
        break;
    case 5:
        window.open('https://images2.alphacoders.com/559/559888.jpg');
        break;
    case 6:
        window.open('https://watchdogs.ubisoft.com/watchdogs/fr-fr/home/');
        break;
    case 7:
        window.open('www.ubisoft.com/fr-fr/game/mario-rabbids-kingdom-battle');
        break;
    case 8:
        alert("Un petit garçon écrit au Père Noël: Cher Père Noël, je suis orphelin et n’ai jamais eu de cadeaux, pourrais-tu m’envoyer 100 euros, s’il te plaît. Le facteur, ému par la lettre fait une collecte auprès de ses collègues du centre de tri, mais ne parvient qu’à récolter 50 euros, qu’il envoie au garçon. Il reçoit une nouvelle lettre: Cher Père Noël, je te remercie pour ton argent... mais les postiers m’en ont piqué la moitié ! ");

        break;
    case 9:
        window.open('https://gph.is/2aKy5Ov');
        break;
    case 10:
        alert("Comment appelle-t-on un chat tombé dans un pot de peinture le jour de Noël ? Un Chat peint de Noël");
        break;
    case 11:
        window.open('https://blog.ubi.com/get-two-ubisoft-pc-classics-free-december/');
        break;
    case 12:
        window.open('https://www.ubisoft.com/fr-fr/game/prince-of-persia');
        break;
    case 13:
        window.open('https://www.youtube.com/watch?v=oN7qqUBriG4');
        break;
    case 14:
        alert("C'est le mois avant Noël et 2 blondes qui vont chercher dans le bois un sapin de Noël. Après 2 heures de recherche, une des blondes dit le prochain sapin qu'on voit, même si il ni a pas de boule, on le prend");
        break;
    case 15:
        window.open('https://www.ubisoft.com/fr-fr/game/steep');
        break;
    case 16:
        window.open('https://www.ubisoft.com/fr-fr/game/beyond-good-and-evil-2');
        break;
    case 17:
        window.open('https://www.ubisoft.com/fr-fr/game/the-division');
        break;
    case 18:
        window.open('https://www.ubisoft.com/fr-fr/game/far-cry-5/');
        break;
    case 19:
        window.open('https://images5.alphacoders.com/710/710313.jpg');
        break;
    case 20:
        window.open('https://www.ubisoft.com/fr-fr/game/south-park-fractured-but-whole');
        break;
    case 21:
        window.open('https://www.ubisoft.com/fr-fr/game/rayman-legends-definitive-edition');
        break;
    case 22:
        window.open('https://www.ubisoft.com/fr-fr/game/the-crew');
        break;
    case 23:
        window.open('https://assassinscreed.ubisoft.com/game/fr-fr/home/');
        break;
    case 24:
        window.open('https://giphy.com/gifs/happy-christmas-excited-bfNKVTSgiiMMg');
        break;
     default:
         break;
     }
}
function getCookies() {
    //let name = dateJ + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    //console.log(decodedCookie);
    let ca = decodedCookie.split(';');
    //console.log(ca);
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
    return "false";
}

function checkCookie(no) {
    var cookie = getCookie("dateOpen"+no);
    //console.log(cookie);
    if (cookie == "true") {
      //console.log("oui");
      return true;
    } else {
      //console.log("non");
      return false;
    }
}
