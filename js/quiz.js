export class Quiz{
    constructor(questions){
        this.questions=questions
        this.currentQuestion=0
        this.displayQuestions()
        document.getElementById("next").addEventListener('click',this.nextQuestion.bind(this))
    }
    displayQuestions(){
        let correctAnswer=this.questions[this.currentQuestion].correct_answer
        let inCorrectAnswers=this.questions[this.currentQuestion].incorrect_answers
        let answers=[correctAnswer,...inCorrectAnswers]
        document.getElementById("question").innerHTML=this.questions[this.currentQuestion].question
        let cartona=``
        answers.forEach(
            function(elem){
                cartona+=`
                                <label class="form-check-label">
                                    <input type="radio" class="form-check-input" name="answer" value=""
                                        checked>
                                    ${elem}
                                </label>
                                <br/>`
                            }
                        )
        document.getElementById("rowAnswer").innerHTML=cartona
    }
    nextQuestion(){
        this.currentQuestion++;
        
        if(this.currentQuestion<this.questions.length){
            this.displayQuestions()
        }
        else{
            console.log("finish");
            
        }
    }
}

