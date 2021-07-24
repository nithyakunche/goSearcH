const quizDB =[
 {
 question:"Q1:Who invented the Light Bulb?",
 a:"Albert Einstein",
 b:"Alexander Graham Bell",
 c:"Thomas Alva Edison",
 d:"Alexander Flemming",
 ans:"ans3"
 },
 {
 question:"Q2:what is the name of the Biggest planet in our solar system?",
 a:"Jupiter",
 b:"Satrun",
 c:"Mars",
 d:"Uranus",
 ans:"ans1"
 },
 {
 question:"Q3:Which is the smallest bird in the world?",
 a:"sparrow",
 b:"Bee Hummingbird",
 c:"penguin",
 d:"parrot",
 ans:"ans2"
 },
 {
 question:"Q4:Who invented the computer?",
 a:"Charles babbage",
 b:"Alexander Grahambell",
 c:"Thomas Alva Edison",
 d:"Alexander Flemming",
 ans:"ans1"
 },
 {
 question:"Q5:The largest 4 digit number is?",
 a:"1000",
 b:"9999",
 c:"999",
 d:"9998",
 ans:"ans2"
 },
 {
 question:"Q6:weight of person is measured in?",
 a:"Litres",
 b:"Kilometers",
 c:"Meters",
 d:"Kilograms",
 ans:"ans4"
 },
 {
 question:"Q7:Which is the largest Continent?",
 a:"Asia",
 b:"Antartica",
 c:"Africa",
 d:"Australia",
 ans:"ans1"
 },
 {
 question:"Q8:How many continents are there in the world?",
 a:"6",
 b:"9",
 c:"7",
 d:"8",
 ans:"ans3"
 },
 {
 question:"Q9:Who is known as the father of Indian constitution?",
 a:"Dr B.R.Ambedkar",
 b:"Indira Gandhi",
 c:"Rabindranath Tagore",
 d:"Prathiba Patel",
 ans:"ans1"
 },
 {
 question:"Q10:What is the National Animal of India?",
 a:"Lion",
 b:"Tiger",
 c:"Giraffee",
 d:"Deer",
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