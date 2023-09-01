const prompt = require("prompt-sync")({ sigint: true });
const { Quiz, Question } = require("./questions.js")
const data = require("./mock-data.js");

const questionBank = [];

data.forEach((item)=>{
    const question = item.question
    const choices = item.choices
    const correctAnswer = item.correctAnswer
    questionBank.push(new Question(question, choices, correctAnswer))
})

const quiz = new Quiz(questionBank);

while (quiz.isMoreQuestions()) {
    const currentQuestion = quiz.question();
    const answer = quiz.answer();
    const userInput = prompt(currentQuestion);
    const isCorrect = quiz.checkAnswer(userInput);
    
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Wrong! correct answer was ", answer);
    }

    quiz.nextQuestion();
}

console.log(`Final Score: ${quiz.score}/${questionBank.length}`)