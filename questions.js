class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.index = 0;
        this.score = 0;
        this.#init()
    }

    #init(){
        const isInstance = this.questions.every((obj) => obj instanceof Question)
        
        if (!isInstance) {
            const error = new TypeError()
            error.message = "You must pass an array of Question objects when instantiating a Quiz object."
            throw error
        } 
    }

    nextQuestion() {
        this.index++
    }

    checkAnswer(userAnswer) {
        if (userAnswer.toLowerCase() === this.questions[this.index].correctAnswer.toLowerCase()) {
            this.score++;
            return true;
        } else {
            return false;
        }
    }

    isMoreQuestions() {
        return this.index < this.questions.length;
    }

    question() {
        return this.questions[this.index].question;
    }

    choices() {
        return this.questions[this.index].choices;
    }

    answer() {
        return this.questions[this.index].correctAnswer;
    }
}

class Question {
    constructor(question = "", choices = [], correctAnswer = "") {
        this.question = question.toLowerCase();
        this.choices = choices;
        this.correctAnswer = correctAnswer;
    }
}

module.exports = {
    Quiz,
    Question,
};
