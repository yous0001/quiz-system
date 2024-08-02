export class Settings{
    constructor(){
        this.category=document.getElementById("category")
        this.difficulty=document.getElementsByName("difficulty")
        this.numberOfQuestions=document.getElementById("numberOfQuestions")
        
        document.getElementById("startBtn").addEventListener('click',this.startQuiz.bind(this))
    }
    startQuiz(){
        let category=this.category.value
        let difficulty=Array.from(this.difficulty).filter(elem=>elem.checked)[0].value
        let numberOfQuestions=this.numberOfQuestions.value
        let API=`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}`
        this.fetchApi(API)
        
    }
    async fetchApi(API){
        let response=await fetch(API)
        response=await response.json()
        console.log(response.results);
        
    }
}

