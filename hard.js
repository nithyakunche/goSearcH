const quizDB =[
 {
 question:"Q1:What is the largest Island in the world?",
 a:"Greenland",
 b:"cuba",
 c:"Great Britain",
 d:" New Guinea",
 ans:"ans1"
 },
 {
 question:"Q2:which of the following is the hardest rock?",
 a:"Granite",
 b:"Diamond",
 c:"Sandstone",
 d:"Marble",
 ans:"ans2"
 },
 {
 question:"Q3:What chemical is added to water supplies in the hopes of improving dental health?",
 a:"Chlorine",
 b:"Flourine",
 c:"Bromine",
 d:"Hydrogen",
 ans:"ans1"
 },
 {
 question:"Q4:Which is the world's largest Desert?",
 a:"Arabian Desert",
 b:"Great Basin Desert",
 c:"Sahara Desert",
 d:"Gobi Desert",
 ans:"ans3"
 },
 {
 question:"Q5:According to Bigbang theory ,how did the universe begin?",
 a:"A meteor shower",
 b:"An explosion",
 c:"A storm",
 d:"Divine interference",
 ans:"ans2"
 },
 {
 question:"Q6:All known elements are organised in?",
 a:"The official index of Elements",
 b:"The Guidebook of chemistry",
 c:"The periodic table",
 d:"None of the above",
 ans:"ans3"
 },{
 question:"Q7:Name the smallest type of tree in the world?",
 a:"Cork Tree",
 b:"Bonsal Tree",
 c:"Hazel",
 d:"Black walnut",
 ans:"ans2"
 },
 {
 question:"Q8:Where is the smallest bone in the body?",
 a:"Nose",
 b:"Ear",
 c:"Elbow",
 d:"Ankle",
 ans:"ans2"
 },
 {
 question:"Q9:World War 1 commenced in?",
 a:"1914",
 b:"1913",
 c:"1916",
 d:"1912",
 ans:"ans1"
 },
 {
 question:"Q10:How many minutes are there in 8 and a half hours?",
 a:"510",
 b:"520",
 c:"515",
 d:"505",
 ans:"ans1"
 }
 ];
 const question=document.querySelector('.question');
 const option1=document.querySelector('#option1');
 const option2=document.querySelector('#option2');
 const option3=document.querySelector('#option3');
 const option4=document.querySelector('#option4');
 const submit=document.querySelector('#submit');
 
 const answers=document.querySelectorAll('.answer');
 const showScore=document.querySelector('#showScore');
 let questionCount=0;
 let score=0;
 const loadQuestion = () => {

 const questionList=quizDB[questionCount];
 question.innerText=questionList.question;
 option1.innerText=questionList.a;
option2.innerText=questionList.b;
 option3.innerText=questionList.c;
 option4.innerText=questionList.d;
 
 }
 loadQuestion();
 const getCheckAnswer = () => {
	 let answer;
	 
	 answers.forEach((curAnsElem) => {
		if(curAnsElem.checked){
             answer=curAnsElem.id;			
	 }
	 });
	 return answer;
 };
 const deselectAll=()=>{
	 answers.forEach((curAnsElem)=>curAnsElem.checked=false);
 }
 submit.addEventListener('click',() => {
	 const checkedAnswer =getCheckAnswer();
	 console.log(checkedAnswer);
	 
	 if(checkedAnswer == quizDB[questionCount].ans){
		 score++;
	 };
	 questionCount++;
	 deselectAll();
	 if(questionCount<quizDB.length){
		 loadQuestion();
	 }else{
		 showScore.innerHTML = `
		 <h3> You scored ${score}/${quizDB.length}..</h3>
		 <button class="btn" onclick="location.reload()"> Play again</button>
		 `;
		 showScore.classList.remove('scoreArea');
	 }
 });