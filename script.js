const form = document.getElementById('question-form');
const expertAreaSelect = document.getElementById('expert-area');
const questionTextarea = document.getElementById('question');
const submitButton = document.getElementById('submit-button');
const answerContainer = document.getElementById('answer-container');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const expertArea = expertAreaSelect.value;
  const question = questionTextarea.value;
  // Hantera formulärdata och visa svaret
  handleQuestion(expertArea, question);
});

function handleQuestion(expertArea, question) {
  // Simulera ett svar från en expert
  const answer = getExpertAnswer(expertArea, question);
  if (answer === "Inget svaran att ge") {
    answerContainer.style.color = "red";
  } else {
    answerContainer.style.color = "green";
  }

  answerContainer.innerHTML = `<p>${answer}</p>`;
}

 // Funktion för att hämta ett svar från en expert
function getExpertAnswer(expertArea, question) {
  // Simulera ett svar från en expert
  if(answers[expertArea]&&answers[expertArea][question]){
    return answers[expertArea][question];
  }
   else{
    return"Inget svaran att ge";
   }

  };

 const answers = {
 shellscript: {
      'Hur skriver jag ett shellskript?': 'Du kan skriva ett shellskript med hjälp av en texteditor och spara det med en .sh-filändelse.',
      'Vad är skillnaden mellan Bash och Zsh?': 'Bash och Zsh är två olika shells som har olika funktioner och syntax.',
    },
    grafikkort: {
      'Hur väljer jag rätt grafikkort?': 'Du bör välja ett grafikkort som passar dina behov och din budget.',
      'Vad är skillnaden mellan NVIDIA och AMD?': 'NVIDIA och AMD är två olika tillverkare av grafikkort som har olika teknologier och prestanda.',
    },
    ciscoroutrar: {
      'Hur konfigurerar jag en Cisco-router?': 'Du kan konfigurera en Cisco-router med hjälp av Cisco IOS och olika kommand.',
      'What is Samsung s market cap?':'Samsung market cap is 1.5 trillion dollars.'
    }

};

