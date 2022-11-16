var readlineSync = require('readline-sync')

var score=0

var userName = readlineSync.question("What's your name? ")
console.log(`Welcome to the quiz ${userName} `)
console.log("____________________")
console.log("")
console.log("Lets see how much you know about your country")
console.log("_________________________")

// question using array and objects
var questions = [{ question: "1.What is the capital city of India? ", answer: "New Delhi" }, { question: "2.Who is father of the nation? ", answer: 'Mahatma Gandhi' }, { question: "3.Who was the first Prime Minister of India? ", answer: "Jawahar lal Nehru" }, { question: "4.Which is the sillicon city of India? ", answer: "Banglore" }, { question: "5.Which is the first Airline of India? ", answer: "Air India" }]

// .......

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer)
  console.log('')
}


function play(question,answer){
  var userAnswer= readlineSync.question(question)
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log('You are right')
    score =score+1
    console.log(`score: ${score}`)
  }
  else{
    console.log('Sorry you are wrong')
    console.log(`score: ${score}`)
  }    
}


function userScore(){
  console.log('Thank you for playing!!!!!')
  console.log(`Your total score is ${score}`)
}



userScore();
