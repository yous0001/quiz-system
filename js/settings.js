import { Quiz } from './quiz.js'

export class Settings{
    constructor(){
        this.category=document.getElementById("category")
        this.difficulty=document.getElementsByName("difficulty")
        this.numberOfQuestions=document.getElementById("numberOfQuestions")
        
        document.getElementById("startBtn").addEventListener('click',this.startQuiz.bind(this))
    }
    async startQuiz(){
        let category=this.category.value
        let difficulty=Array.from(this.difficulty).filter(elem=>elem.checked)[0].value
        let numberOfQuestions=this.numberOfQuestions.value
            if(numberOfQuestions==""){
                $("#alert1").fadeIn(500)
            }
            else{
                let API=`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}`
                let questions=await this.fetchApi(API)
                if(questions.length>0){
                    $("#setting").fadeOut(500,()=>{
                        $("#quiz").fadeIn(500);
                    });
                    let quiz=new Quiz(questions);
            }
        }
    }
    async fetchApi(API){
        let response=await fetch(API)
        response=await response.json()
        return response.results;
        
    }
}

