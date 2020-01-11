var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  nextQuestion()
})
// // START
// TimeRanges.addEventListener('click', countDown)
// function countDown(minutes) {
//   var seconds = 60;
//   var mins = minutes
//   function tick() {
//       var counter = document.getElementById("timer");
//       var current_minutes = mins-1
//       seconds--;
//       counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
//       if( seconds > 0 ) {
//           setTimeout(tick, 1000);
//       } else {
//           if(mins > 1){
//               countDown(mins-1);           
//           }
//       }
//   }
//   tick();
// }
// countdown(2);
// // END

// function mainTimer(){
//   //document.getElementById("timerHere").innerHTML = "My First JavaScript";
//   $("timerHere").html("YES!!");
//   setTimeout(fiveSeconds,1000 *5);
//   setTimeout(tenSeconds, 1000 *10);
//   setTimeout(timeUp, 1000 *15);

// function fiveSeconds() {
//   console.log("10 secs");
// }

// function tenSeconds() {
//   $("#timer").append("<h2>5 seconds left!</h2>");
//  //document.getElementById("timer").innerHTML=();
  
//   console.log("5 secs left");

// }

// function timeUp() {
//   $("#timer").append("<h2>Time Ups</h2>");
//   document.getElementById("timer").innerHTML="10 secs";
  
//   console.log("Times Up");
// }








function startGame() {
  //mainTimer();
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  nextQuestion()
}

function nextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
      
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

var questions = [
  {
    question: 'What black stone is the most common volcanic rock on Earth?',
    answers: [
      { text: 'Basalt', correct: true },
      { text: 'Lime', correct: false },
      { text: 'Granite', correct: false },
      { text: 'Rolling Stones', correct: false }
    ]
  },
  {
    question: 'How many neck bones do humans have?',
    answers: [
      { text: 'Seven', correct: true },
      { text: 'One', correct: false },
      { text: 'Five', correct: false },
      { text: 'Eight', correct: false }
    ]
  },
  {
    question: 'How many hours are there in a week?',
    answers: [
      { text: '40', correct: false },
      { text: '360', correct: false },
      { text: '256', correct: false },
      { text: '168', correct: true }
    ]
  },
  {
    question: 'Who created Javascript?',
    answers: [
      { text: 'Sir Tim Berners-Lee', correct: false },
      { text: 'Guido van Rossum', correct: false },
      { text: 'Brendan Eich', correct: true },
      { text: 'Elon Musk', correct: false },
    ]
  },
  {
    question: 'Who wrote "Gullivers Travels"?',
    answers: [
        { text: 'Jonathan Swift', correct: true },
      { text: 'Michael Crichton', correct: false },
      { text: 'James Patterson', correct: false },
      { text: 'Dan Brown', correct: false },
    ]
  },
  {
    question: 'Which Canadian singer performed the song "(Everything I Do) I Do It for You"?',
    answers: [
      { text: 'Michael Buble', correct: false },
      { text: 'Bryan Adams', correct: true },
      { text: 'Shania Twain', correct: false },
      { text: 'Celine Dione', correct: false }
    ]
  },
  {
    question: 'What language does the word "algebra" come from?',
    answers: [
      { text: 'Filipino', correct: false },
      { text: 'Malay', correct: false },
      { text: 'Egyptian', correct: false },
      { text: 'Arabic', correct: true }
    ]
  },
  {
    question: 'Who played the role of the US president in the movie "Dave"?',
    answers: [
      { text: 'Martin Sheen', correct: false },
      { text: 'Martin Short', correct: false },
      { text: 'Steve Martin', correct: false },
      { text: 'Kevin Kline', correct: true }
    ]
  },
  {
    question: 'What Beatles song repeats the title in the lyrics forty-one times?',
    answers: [
      { text: 'Let it Be', correct: true },
      { text: 'Yesterday', correct: false },
      { text: 'Hey Jude', correct: false },
      { text: 'Teach Me How to Dougie', correct: false }
    ]
  },
  {
    question: 'In the movie "Reservoir Dogs", who keeps are razor blade in his boot?',
    answers: [
      { text: 'Mr. Pink', correct: false },
      { text: 'Mr. Orange', correct: false },
      { text: 'Mr. White', correct: false },
      { text: 'Mr. Blonde', correct: true }
    ]
  }
]