const quizDB = [

{
    question: "Q1: What's Tanu Favourite Drink?",
    a: "Pepsi",
    b: "Nimbu Pani",
    c: "Frooti",
    d: "Lassi",
    ans: "ans3"
},
{
    question: "Q2: Who is her Favourite Youtube Blogger?",
    a: "BB",
    b: "Carry Minati",
    c: "Nikhil sharma",
    d: "Technical Guruji",
    ans: "ans3"
},
{
    question: "Q3: In which date her Sbi Junior Associate final exam result declared?",
    a: "25 Dec 2020",
    b: "24 Dec 2020",
    c: "26 Dec 2020",
    d: "Bhai Hmko Kya lena dena isse",
    ans: "ans2"
},
{
    question: "Q4: Which flight Tanu has taken to reach Gujarat for her Language Proficiency Test?",
    a: "Spicejet",
    b: "Indigo",
    c: "Air Asia",
    d: "None of these",
    ans: "ans1"
}
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score =0;
const loadQuestion =() =>{

    const questionList = quizDB[questionCount]
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();
const getCheckAnswer = ()=>{
    let answer;
    answers.forEach((currAnsElem)=>{
     if(currAnsElem.checked){
         answer= currAnsElem.id;
     }
     
    });
    return answer;

};
const deselectAll = ()=>{
    answers.forEach((currAnsElem)=>currAnsElem.checked=false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }else{
        
            showScore.innerHTML = `<h3> You Scored ${score}/${quizDB.length} 	</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>`;
            showScore.classList.remove('scoreArea');
            
        
    }
});

