
const questions = [
  {
    id: 1,
    question: "Ville avec une histoire, une langue propre et des traditions spécifiques, sur quel territoire se trouve Biarritz ?",
    image: "/assets/biarritz1.png",
    reponses: [
      {
        id: 1,
        label: "Le Pays Vasque",
        validity: false
      },
      {
        id: 2,
        label: "Le Pays Basque",
        validity: true
      },
      {
        id: 3,
        label: "Le Pays Casque",
        validity: false
      },
      {
        id: 4,
        label: "Le Pays du Ritz",
        validity: false
      }
    ],
    explication: "Biarritz se trouve sur le territoire du Pays basque (en basque : Euskal Herria ; en espagnol : País Vasco), soit le pays de la langue basque (l'euskara). La langue basque est actuellement parlée par 28,4 % de la population et comprise par 44,8%."
  },
  {
    id: 2,
    question: "A quelle sainte femme est dédié un rocher sur lequel est érigée une statue à son effigie ?",
    image: "/assets/rochervierge.jpg",
    reponses: [
      {
        id: 1,
        label: "La Belle Hélène",
        validity: false
      },
      {
        id: 2,
        label: "La Vierge Marie",
        validity: true
      },
      {
        id: 3,
        label: "La Brigitte Macron",
        validity: false
      },
      {
        id: 4,
        label: "La Veuve Noire",
        validity: false
      }
    ],
    explication: "Le rocher de la Vierge doit son nom à la statue de la vierge qui fût installée à son sommet en 1865."
  },
  {
    id: 3,
    question: "Dans quel Golfe, faisant partie intégrante de cet océan, se trouve Biarritz ?",
    image: "/assets/biarritz12.png",
    reponses: [
      {
        id: 1,
        label: "Le Golfe de d'Artagnan",
        validity: false
      },
      {
        id: 2,
        label: "Le Golf de GTI",
        validity: false
      },
      {
        id: 3,
        label: "Le Golfe de Gascogne",
        validity: true
      },
      {
        id: 4,
        label: "Le Club de Golf",
        validity: false
      }
    ],
    explication: "Situé dans l'océan Atlantique, le Golfe de Gascogne commence le long de la côte nord de l'Espagne et longe l'ouest de la France jusqu'à la Bretagne."
  },
  {
    id: 4,
    question: "Quelle Impératrice des Français, d'origine espagnole, fit le succès de Biarritz en tant que station de villégiature ?",
    image: "/assets/biarritz10.png",
    reponses: [
      {
        id: 1,
        label: "Eugénie de Montijo",
        validity: true
      },
      {
        id: 2,
        label: "Julia Iglessias",
        validity: false
      },
      {
        id: 3,
        label: "Shakira",
        validity: false
      },
      {
        id: 4,
        label: "Jennifer Lopez",
        validity: false
      }
    ],
    explication: "Eugénie de Montijo rencontre le tout premier président de la République française, Louis-Napoléon Bonaparte, en 1849 et l'épouse en 1853."
  },
  {
    id: 5,
    question: "Quelle est l'autre langue régionale reconnue comme autochtone à Biarritz ?",
    image: "/assets/biarritz3.png",
    reponses: [
      {
        id: 1,
        label: "Le Pimentais",
        validity: false
      },
      {
        id: 2,
        label: "Le Piémontais",
        validity: false
      },
      {
        id: 3,
        label: "Le Tuscon",
        validity: false
      },
      {
        id: 4,
        label: "Le Gascon",
        validity: true
      }
    ],
    explication: "En France, le Gascon ne dispose d'aucun statut officiel. Il est inclus dans l'occitan qui devient langue d'enseignement facultatif."
  },
  {
    id: 6,
    question: "Comment s'appelle le club de rugby de Biarritz ?",
    image: "/assets/rugybiarritz.jpg",
    reponses: [
      {
        id: 1,
        label: "Biarritz Olympique Pays Basque",
        validity: true
      },
      {
        id: 2,
        label: "Biarritz Aviron Pays Basque à la rame",
        validity: false
      },
      {
        id: 3,
        label: "Biarritz Olympique Rugby 2024",
        validity: false
      },
      {
        id: 4,
        label: "Olympique de Biarritz",
        validity: false
      }
    ],
    explication: "Le Biarritz Olympique Pays Basque est un club de rugby à XV français, basé à Biarritz."
  },
  {
    id: 7,
    question: "Quels sont les 3 sports qui caractérisent le plus Biarritz et sa région ?",
    image: "/assets/biarritz14.png",
    reponses: [
      {
        id: 1,
        label: "Le poker, la belotte et le tarot",
        validity: false
      },
      {
        id: 2,
        label: "La marelle, la corde à sauter et l'élastique",
        validity: false
      },
      {
        id: 3,
        label: "Le surf, la voile et le waikiki",
        validity: false
      },
      {
        id: 4,
        label: "Le rugby, le surf et la pelote",
        validity: true
      }
    ],
    explication: "Le rugby, le surf et la pelote basque font parties des 3 sports les plus pratiqués dans la région, les autres sports populaires sont : le Kitesurf, le paddle, la pêche et le golf."
  },
  {
    id: 8,
    question: "L'Hôtel du Palais portait un autre nom lors de sa construction en 1854 et jusqu'en 1893, lequel ?",
    image: "/assets/biarritz13.png",
    reponses: [
      {
        id: 1,
        label: "Villa Ceezar",
        validity: false
      },
      {
        id: 2,
        label: "Villa Eugénie",
        validity: true
      },
      {
        id: 3,
        label: "Villa Sissi Impératrice",
        validity: false
      },
      {
        id: 4,
        label: "Villa Elisabeth Borgne",
        validity: false
      }
    ],
    explication: "La Villa Eugénie fut édifiée en 1854 sur la volonté de Napoléon III. C’est l’Impératrice Eugénie qui persuada l’Empereur d’y installer la résidence d’été de la cour impériale."
  },
  {
    id: 9,
    question: "Dans la Vallée d’Ossau, en plein cœur de la montagne, serpente le petit...",
    image: "/assets/biarritz9.png",
    reponses: [
      {
        id: 1,
        label: "Poucet",
        validity: false
      },
      {
        id: 2,
        label: "Tacot des sommets",
        validity: false
      },
      {
        id: 3,
        label: "Train d'Artouste",
        validity: true
      },
      {
        id: 4,
        label: "Punch",
        validity: false
      }
    ],
    explication: "Le petit train d'Artouste se situe dans la vallée d'Ossau, dans les Pyrénées-Atlantiques. Ce chemin de fer touristique et historique, permet une visite dans la montagne à plus de 2 000 mètres d'altitude."
  },
  {
    id: 10,
    question: "L'Aquarium de Biarritz, est connu aussi par le premier nom qui lui a été attribué ?",
    image: "/assets/biarritz15.png",
    reponses: [
      {
        id: 1,
        label: "Le musée des phoques",
        validity: false
      },
      {
        id: 2,
        label: "Le musée du fromage de brebis des pyrénées",
        validity: false
      },
      {
        id: 3,
        label: "Le musée des océans",
        validity: false
      },
      {
        id: 4,
        label: "Le musée de la mer",
        validity: true
      }
    ],
    explication: "L'Aquarium de Biarritz, connu aussi sous le premier nom qu'il lui a été attribué, le musée de la Mer, se situe à Biarritz, face au rocher de la Vierge."
  }
];



/* feature/buttonDesign changecolor*/ 



/*function red(){
	changeColor.style.backgroundColor = "red";
};
function blue(){
	changeColor.style.backgroundColor = "blue";
}; */


/*changeColor.addEventListener("click", red);
changeColor.addEventListener("click", blue); */
  

/*$$$$$$$$$l$$$$$$$$$$$$$$ 
let choise = true;
function changeColor(){
  let button = document.getElementById("button");
  if( choise == true ) {
    changeColor.style.backgroundColor = "green";
    choise = false;
  }
  else{
    changeColor.style.backgroundColor = "red";
    choise = true;
  }
}
$$$$$$$$$$*/

/*addChangeColorClicker();
element.addEventListener("click", changeColor() { alert("background-color"), });
console.log("hello") 

/*element.addEventListener("click", changeColor);*/

/*const addChangeColorClicker = () => {
  changeColor = document.querySelectorAll('.changeColor')
  for (let i = 0; i < changeColor.length; i++) {
    changeColor[i].addEventListener('click', () => {
    if (changeColor[i].style.background ==="blue") changeColor[i].style.background="grey"
    else changeColor[i].style.background="blue"

  }) 
 }
}*/






/* CHRONO */

let temps = 59;

const timerElement = document.getElementById("timer");

function diminuerTemps() {
  document.querySelector("#imgChrono").className = "bouge";

  let minutes = parseInt(temps / 60, 10);
  let secondes = parseInt(temps % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

    timerElement.innerText = `${minutes} : ${secondes}`;
    temps = temps <= 0 ? 0 : temps - 1;
}
  

/* DEMARRER LE QUIZZ */

  /* Données à afficher */
let questNumber = 0;

const afficheQuestions = () => {
  return `<article id="titleImgContainer">
            <div id="containTitle">
              <img src="assets/Ellipse_6.png" alt="ellipse" id="ellipseTitle">
              <h1 id="titleIntro">Question ${questions[questNumber].id}</h1>
              <p id="question">${questions[questNumber].question}</p>
            </div>
            <div id="containImg">
              <img src="${questions[questNumber].image}" alt="paysage-biarritz" id="imgCenter">
            </div>
            <div id="explication" style="display:none">${questions[questNumber].explication}</div>
          </article>`;
}

  
const afficheReponses = () => { 
  return `<section id="bouton-reponse"> 
            <button class="changeColor graybtn" id="A">${questions[questNumber].reponses[0].label}</button> 
            <button class="changeColor graybtn" id="B">${questions[questNumber].reponses[1].label}</button>
            <button class="changeColor graybtn" id="C">${questions[questNumber].reponses[2].label}</button>
            <button class="changeColor graybtn" id="D">${questions[questNumber].reponses[3].label}</button>
            <button id="Valider">Valider</button>
            <button id="suivant" style="display:none">Suivant</button> 
          </section>`;
}                      


/*Cliquer sur le bouton "démarrer le quiz", il disparait par la suite et la première question avec ses réponses apparaissent*/
 
const buttonCommencer = document.getElementById("buttonCommencer");
const boutonReponse = document.getElementById("bouton-reponse");
const valider = document.getElementById("Valider");


buttonCommencer.addEventListener("click", () => {
  buttonCommencer.style.display = "none";
  boutonReponse.style.visibility = "visible";
  goQuiz(questNumber);
});


const addReponseClicker = () => {
  let changeColor = document.querySelectorAll(".changeColor");

  for (let i = 0; i < changeColor.length; i++) {
    changeColor[i].addEventListener("click", () => {

      if (changeColor[i].className.includes("graybtn")) {
        changeColor[i].classList.replace("graybtn", "bluebtn")
        
      } else {
        changeColor[i].classList.replace("bluebtn", "graybtn")
      }
    });
  }
};



/*La première question apparait avec ses réponses, l'explication reste cachée*/
/*On choisit une réponse (à ajouter coloration et rép sélectionnée) et on valide*/ 
/*si réponse sélectionnée => on affiche l'explication, la réponse donnée est verte ou rouge et la bonne réponse est mise en vert (à ajouter)*/
/* sinon rien ne se passe jusqu'à ce que l'utilisateur est sélectionné une réponse*/
const goQuiz = (questNumber) => {
  temps = 59;
  const quest = document.getElementById("titleQuest-imgCenter");
  const sectionButton = document.getElementById("section-button");
   
  let timeStop = setInterval(diminuerTemps, 1000);
  quest.innerHTML = afficheQuestions();
  sectionButton.innerHTML = afficheReponses();

  addReponseClicker();

  const explication = document.getElementById("explication");
  const suivant = document.getElementById("suivant");
  const valider = document.getElementById("Valider");
  const chronoBouge = document.getElementById("imgChrono");
  const timer = document.getElementById("timer");

  valider.addEventListener("click", () => {
    const repChoisi = true;

    if (repChoisi) {
      explication.style.display = "block";
      valider.style.display = "none";
      suivant.style.display = "block";

      clearInterval(timeStop);
      timer.innerHTML = "00:00";
      chronoBouge.classList.remove("bouge");

    } else {
      alert("Merci de sélectionner une réponse avant de cliquer sur valider!");
    }
  });

  butSuivant();
    
};

const butSuivant = () => {
  suivant.addEventListener("click", () => {
        
    if (questNumber !== 9) {
      questNumber++;
      goQuiz(questNumber);
  
    } else {
      alert("Quiz fini afficher le score!");
    }
  });
};

