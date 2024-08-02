export class Quiz{
    constructor(questions){
        this.questions=questions
        this.score=0
        this.currentQuestion=0
        this.numOfQuestion=this.questions.length
        this.displayQuestions()
        document.getElementById("next").addEventListener('click',this.nextQuestion.bind(this))
    }
    displayQuestions(){
        let correctAnswer=this.questions[this.currentQuestion].correct_answer
        let inCorrectAnswers=this.questions[this.currentQuestion].incorrect_answers
        let answers=this.putCorrectAnswerRandomly(correctAnswer,inCorrectAnswers)

        document.getElementById("question").innerHTML=this.questions[this.currentQuestion].question
        let cartona=``
        answers.forEach(
            function(elem){
                cartona+=`
                                <label class="form-check-label">
                                    <input type="radio" class="form-check-input" name="answer" value="${elem}"
                                        checked>
                                    ${elem}
                                </label>
                                <br/>`
                            }
                        )
        document.getElementById("rowAnswer").innerHTML=cartona
    }
    putCorrectAnswerRandomly(correctAnswer,inCorrectAnswers){
        let place=Math.floor(Math.random()*(inCorrectAnswers.length+1))
        inCorrectAnswers.splice(place,0,correctAnswer)
        return inCorrectAnswers
    }
    nextQuestion(){
        let correctAnswer=this.questions[this.currentQuestion].correct_answer
        let userAnswer=Array.from(document.getElementsByName("answer")).filter((elem)=>{
            return elem.checked
        })[0].value
        this.checkAnswer(userAnswer,correctAnswer)
        this.currentQuestion++;
        if(this.currentQuestion<this.numOfQuestion){
            this.displayQuestions()
        }
        else{
            console.log("finish");
        }
    }
    checkAnswer(userAnswer,correctAnswer){
        if(userAnswer==correctAnswer){
            this.score++
            $("#Correct").fadeIn(500).fadeOut(500);
        }
        else{
            $("#inCorrect").fadeIn(500).fadeOut(500);
            
        }
    }
}

