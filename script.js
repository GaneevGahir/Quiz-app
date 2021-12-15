var quizData = [
    {
        question: 'how old is Barack Obama?',
        a: '18',
        b: '25',
        c: '60',
        d: '80',
        correct: 'c',
    },
    {
        question: 'what is the most used coding language in 2021?',
        a: 'pyton',
        b: 'javascript',
        c: 'C#',
        d: 'java',
        correct: 'a',
    },
    
    {
        question: 'who is the president of Kenya?',
        a: 'joe biden',
        b: 'jomo kenyata ',
        c: 'Daniel arap Moi',
        d: 'Uhuru Kenyatta',
        correct: 'd',
    },
    
    {
        question: 'what is the capital city of Kenya? ',
        a: 'tanzania',
        b: 'Nairobi',
        c: 'mombasa',
        d: 'kampala',
        correct:'b',
    },
    {
        question: 'who is the best footballer in the world? ',
        a: 'ronaldo',
        b: 'mbappe',
        c: 'messi',
        d: 'neymar',
        correct:'c',
    },
    {
        question: "who is the richest man on Earth? ",
        a: "jeff bezos",
        b: "elon musk",
        c: "bill gates",
        d: "mark zuckerberg",
        correct: "b",
    },
    {
        question: 'what is the fastest car in the world? ',
        a: 'bugatti',
        b: 'SSC Tuatara',
        c: 'McLaren Speedtail',
        d: 'Koenigsegg Agera R',
        correct:'b',
    },
];

var answerEls = document.querySelectorAll(".answer");
var quiz = document.getElementById("quiz");
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var submitBtn = document.getElementById('submit');

var questionEl = document.getElementById('question');

var currentQuiz = 0;
var score= 0;

var answer = undefined;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    var currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
}


// var currentQuestion=1;


// submitBtn.addEventListener('click', function (){
//     currentQuizData= quizData[currentQuestion++];
//     questionEl.innerHTML = currentQuizData.question;
//     a_text.innerHTML=currentQuizData.a;
//     b_text.innerHTML=currentQuizData.b;
//     c_text.innerHTML=currentQuizData.c;
//     d_text.innerHTML=currentQuizData.d;
// }
// )

// ! in class

// two equal signs is u sed to comare 2 numbers

// three equal sings is used comare 2 numbers as well as the data types

// If inside an if is a “nested if else”


submitBtn.addEventListener("click", function () {
    var answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // todo: Show result
            alert("You finished!");
        }
    }
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        // todo: Show result
        quiz.innerHTML = `<h2> You answered correctly at ${score} / ${quizData.length}</h2>`;
    }
});



function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function getSelected() {
    var answerEls = document.querySelectorAll(".answer");

    var answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}


