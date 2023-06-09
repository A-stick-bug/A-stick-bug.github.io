function begin() {
    const output = [];

    // for each question check if correct
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;

            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // display answer and user clicks submit
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}<br><br>
    <b>Answers</b><br>
    1: "A" is superposition, not entanglement. "C" is a compound.<br><br>
    2: "A" is true because quantum computers do indeed use qubits. "B" is true because quantum computers can perform simultaneous operations. "C" is true, all BQP problems can only be solved efficiently by quantum computers<br><br>
    3: "A" and "B" find the shortest path in a graph, has nothing to do with prime factoring. "D" is for finding the convex hull of a set of points; also not related to prime factoring<br><br>
    4: Quantum computers themselves are actually much more energy efficient than regular computers. However, they environment they must be in (extremely cold and cannot be affected by the environment) is extremely costly to maintain.`;
}

// modify html
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
        question: "1. What is quantum entanglement?",
        answers: {
            a: "Particle being in 2 states at once",
            b: "State of one particle being affected by the state of the other",
            c: "2 atoms being connected to each other",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "2. How does quantum computing differ from classical computing?",
        answers: {
            a: "Quantum computers use qubits instead of bits",
            b: "Quantum computers are faster than classical computers",
            c: "Some problems can only be solved efficiently by quantum computers",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "3. Which of the following algorithms is known for its ability to factor large numbers into their prime factors using a quantum computer?",
        answers: {
            a: "Bellman Ford's algorithm",
            b: "Dijkstra's algorithm",
            c: "Shor's algorithm",
            d: "Graham Scan"
        },
        correctAnswer: "c"
    }
    ,
    {
        question: "4. True or False, Quantum computers consume more energy than regular computers",
        answers: {
            a: "True",
            b: "False",
            c: "It depends",
        },
        correctAnswer: "b"
    }

];

// start
begin();
submitButton.addEventListener('click', showResults);
