const quizDB =[
 {
 question:"Q1:Which month of the year has least number of days?",
 a:"January",
 b:"February",
 c:"September",
 d:"November",
 ans:"ans2"
 },
 {
 question:"Q2:How many consonants are there in English Alphabet?",
 a:"21",
 b:"22",
 c:"19",
 d:"18",
 ans:"ans1"
 },
 {
 question:"Q3:Which animal is known as the ship of desert?",
 a:"tiger",
 b:"giraffe",
 c:"camel",
 d:"lion",
 ans:"ans3"
 },
 {
 question:"Q4:Which is the largest animal in the world?",
 a:"Whale shark",
 b:"Blue Whale",
 c:"Tiger shark",
 d:"dianosaur",
 ans:"ans2"
 },
 {
 question:"Q5:Which festival is called as festival of colors?",
 a:"Diwali",
 b:"Sankaranthi",
 c:"Ganesh Chathurdhi",
 d:"Holi",
 ans:"ans4"
 },
 {
 question:"Q6:What type of bird lays the largest eggs?",
 a:"peacock",
 b:"ostrich",
 c:"penguin",
 d:"kiwi",
 ans:"ans2"
 },
 {
 question:"Q7:In which direction does the sunrise?",
 a:"North",
 b:"South",
 c:"East",
 d:"West",
 ans:"ans3"
 },
 {
 question:"Q8:Which is the largest flower?",
 a:"Rafflesia",
 b:"sunflower",
 c:"Dahlia",
 d:"African Daisy",
 ans:"ans1"
 },
 {
 question:"Q9:What do you call a type of shape that has five sides?",
 a:"Pentagon",
 b:"Hexagon",
 c:"heptagon",
 d:"triangle",
 ans:"ans1"
 },
 {
 question:"Q10:How many letters are there in English Alphabet?",
 a:"24",
 b:"26",
 c:"25",
 d:"27",
 ans:"ans2"
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