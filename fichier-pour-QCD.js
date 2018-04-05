
var questions = [
    {
        "question": "Les informations contenues dans l’élément &lthead&gt sont affichées sur la page web",
        "answer": false,
        "argument": "Les informations que contient l'en-tête ne sont pas affichées sur la page, ce sont simplement des informations générales à destination de l'ordinateur"
    },
    {
        "question": "La balise &lttitle&gt sert à créer des titres qui seront affichés dans la page web",
        "answer": true,
        "argument": "La balise &lttitle&gt affiche le titre de la page dans la barre de titre du navigateur"
    },
    {
        "question": "En xHTML strict, l'élément body peut contenir du texte",
        "answer": false,
        "argument": "Le texte doit être encapsulé, par ex. dans un élément p de paragraphe"
    },
    {
        "question": "Le footer doit apparaitre en haut de la page",
        "answer": false,
        "argument": "Le footer doit apparaître en bas de la page"
    },
    {
        "question": "Le liens avec le fichier css est contenu dans un balise <link> dans le header de la page",
        "answer": true,
        "argument": "De plus il doit comporter la propriété rel=\"stylesheet\""
    }
];

document.getElementById("validation").addEventListener("click", displayResults);

function toHTML(o, id){
    console.log(id);
    return `<article>
      <section class="question">${o.question}</section>
      <section class="choice">
      
	    <label for="choix">VRAI</label>
        <input type="radio" id="${id}_input" id="choix" value="choice" checked/>
        
        <label for="choix">FAUX</label>
        <input type="radio" value="choice" id="choix" />
        
      </section>
      <section id="${id}_solution"></section>
    </article>`;

}


function displayResults() {
    var el;
    for (var i= 0; i < questions.length; i++) {
        el =  document.getElementById(i + '_solution');
        if (document.getElementById(i + '_input').checked == questions[i].answer) {
            el.innerHTML = " BRAVO : " + questions[i].argument;
            el.style.display = "block";
            el.style.background ="#0da80d"
        }
        else {
            el.innerHTML = " ERREUR : " + questions[i].argument;;
            el.style.display = "block";
            el.style.background = "#F7230C";
        }
    }

}

displayQuestions();

function displayQuestions(){

    var result = [];

    for (var i= 0; i < questions.length; i++) {
        result.push(toHTML(questions[i], i));
    }

    document.getElementById('main').innerHTML = result.join('');

}

