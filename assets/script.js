// Set variables
let gameContainer = document.getElementById("question-start")
let startContainer = document.getElementById("start-container")
let startButton = document.getElementById("start-btn")
let quizContainer = document.getElementById("quiz-container")
let quizQuestion = document.getElementById("quiz-question")
let answerContainer = document.getElementById("answer-container")
let scoreContaienr = document.getElementById("score-container")
let score = document.getElementById("score")

let timeLeft = 60
let counter = document.getElementById("counter")
counter.textContent = timeLeft

// Set questions
let questions = [
    {
      Question: "What made Black Sabbath unique?",
      Responses: [
        "They were the first band to use distorted guitars",
        "They were responsible for the iconic 'devil's horns' gesture",
        "Their use of the tritone",
        "The members had all played in famous bands prior",
      ],
      Correct: "Their use of the tritone",
    },
    {
      Question: "Which style of music most heavily influenced early heavy metal?",
      Responses: ["Blues", "Rock and Roll", "Folk", "Psychadelic Rock"],
      Correct: "Blues",
    },
    {
      Question: "What is typical of the Doom sub-genre of extreme metal?",
      Responses: [
        "Frequent references to the video game 'Doom'",
        "Low-tuned guitars and slower tempo music meant to evoke a sense of dread",
        "Angry and nihilistic lyrical themes punctuated with rapid instrumentals",
        "None of the above",
      ],
      Correct:
        "Low-tuned guitars and slower tempo music meant to evoke a sense of dread",
    },
    {
      Question: "Who was the first heavy metal band?",
      Responses: ["Black Sabbath", "Led Zeppelin", "Coven", "Deep Purple"],
      Correct: "Black Sabbath",
    },
    {
      Question: "Who popularized the 'Devil's Horns' hand gesture?",
      Responses: [
        "Ozzy Osborne",
        "Gene Simmons",
        "Ronnie James Dio",
        "Lemmy Kilmister",
      ],
      Correct: "Ronnie James Dio",
    },
    {
      Question: "Why is Black Metal infamous?",
      Responses: [
        "Lyrical themes",
        "Church burnings and other acts of violence",
        "Raw and unrefined musical content",
        "All of the above",
      ],
      Correct: "All of the above",
    },
    {
      Question: "Who is the top-selling Metal band of all time?",
      Responses: ["Metallica", "Anthrax", "Judas Priest", "Black Sabbath"],
      Correct: "Metallica",
    },
    {
      Question: "Why is metalcore called metalcore?",
      Responses: [
        "There isn't a good reason — it's a catch-all term for metal with influences from genres such as rock or punk",
        "It's a fusion of hardcore punk and heavy metal",
        "It's a revivalist movement meant to return metal to its 'core'",
        "None of the above",
      ],
      Correct: "It's a fusion of hardcore punk and heavy metal",
    },
    {
      Question: "How did Black Metal get its name?",
      Responses: [
        "From the name of Venom's second album",
        "In reference to the black-and-white facepaint called 'corpsepaint' that musicians will commonly wear",
        "Because of the heavy lyrical focus on Satanism and anti-Christian sentiment within the genre",
        "Musicians will only wear black when performing",
      ],
      Correct: "From the name of Venom's second album",
    },
  ];

// List functions
function startGame() {
    // Hide Start Container, show quiz container
    console.log("Hello there!")
    startContainer.setAttribute("class", "hidden")
    quizContainer.setAttribute("class", "visible")

    // Start timer
    let timeInterval = setInterval(function() {
        timeLeft--
        counter.textContent = timeLeft

        if (timeLeft == 0) {
            clearInterval(timeInterval)
         }
    }, 1000)

    loadQuestions();
}

questionNumber = 0
function loadQuestions() {
    // Propogate first question
    if (questionNumber < questions.length) {
    quizQuestion.textContent = questions[questionNumber].Question

    document.getElementById("answer-1").textContent = questions[questionNumber].Responses[0]
    document.getElementById("answer-2").textContent = questions[questionNumber].Responses[1]
    document.getElementById("answer-3").textContent = questions[questionNumber].Responses[2]
    document.getElementById("answer-4").textContent = questions[questionNumber].Responses[3]

    
    // Compare to correct answer
    document.getElementById("answer-1").addEventListener("click", checkanswer)
    document.getElementById("answer-2").addEventListener("click", checkanswer)
    document.getElementById("answer-3").addEventListener("click", checkanswer)
    document.getElementById("answer-4").addEventListener("click", checkanswer)
    } else {
        highScores();
    }
    // Iterate to next question

}

function checkanswer() {
    if(this.textContent == questions[questionNumber].Correct) {
        questionNumber++;
        loadQuestions();
    } else {
        count = timeLeft -= 5
        questionNumber++;
        loadQuestions();
    }

}

function highScores() {
    gameContainer.setAttribute("class", "hidden")
    scoreContaienr.setAttribute("class", "visible")
    
    score.textContent = timeLeft
}


// Add event listeners
startButton.addEventListener("click", startGame)