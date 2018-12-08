$(document).ready(function(){
  $("#remaining-time").hide();
  $("#start").on("click", startGame);
  // $(document).on('click' , '.option', guessChecker);
  // $("#firstAnswer").hide();
  
  
});

var correctAnswers =  0;
var incorrectAnswers = 0;
var unanswered = 0;
var currentSet = 0;
var timer = 20;
// var timerTwo = 5;
var timerOn = false;
var timerId = "";

var beyonce = [{
  question: "What year was Beyonce born?",
  option1: "1981",
  option2: "1980",
  option3: "1982",
  option4: "1985",
  answer: "1981",
  // img: "...img",
},
{
  question: "Where was Beyonce born?",
  option1: "Dallas, Tx",
  option2: "Houston, Tx",
  option3: "Atlanta, Ga", 
  option4: "New York, Ny", 
  answer: "Houston, Tx",
  // img: "...img",
},
{
  question: "When did Beyonce go solo?",
  option1: "2002",
  option2: "2003",
  option3: "2006", 
  option4: "2005", 
  answer: "2003",
  img: "...img",
},
{
  question: "What's the name of Beyonce's second solo album?",
  option1: "Dangerously in Love",
  option2: "Formation",
  option3: "Beyonce", 
  option4: "Sasha Fierce", 
  answer: "Beyonce",
  img: "...img",
},
{
  question: "How many SOLO albums has Beyonce released?",
  option1: "3",
  option2: "6",
  option3: "5", 
  option4: "7", 
  answer: "7",
  img: "...img",
},]

// var beyonce = {
//   questions: {
//     q1: "What year was Beyonce born?",
//     q2: "Where was Beyonce born?",
//     q3: "When did Beyonce go solo?",
//     q4: "What's the name of Beyonce's second solo album?",
//     q5: "How many SOLO albums has Beyonce released?",
//     q6: "What are the names of Beyonce's twins?",
//     q7: "When did Beyonce get married?"
//   },
//   options: {
//     q1: ["1981", "1980", "1982", "1985"],
//     q2: ["Dallas, Tx", "Houston, Tx", "Atlanta, Ga", "New York, Ny"],
//     q3: ["2002", "2003", "2006", "2005"],
//     q4: ["Dangerously in Love", "Formation", "Beyonce", "Sasha Fierce"],
//     q5: ["3", "6","5", "7" ],
//     q6: ["Rumi & Sir", "Romi & Sor", "Rami & Sur", "Green & Purple"],
//     q7: ["January 4, 2009", "April 4, 2008", "March 4, 2010","September 4, 2008"]
//   },
//   answers: {
//     q1: "1981",
//     q2: "Houston, TX",
//     q3: "2003",
//     q4: "Beyonce",
//     q5: "7",
//     q6: "Rumi & Sir",
//     q7: "April 4, 2008"
//   }};
  
  
  // method to loop through and display questions and options 
// function thankYouNext(){
//   $('#options').hide();
//   $("#results").html("Correct the answer was " + currentAnswer  );
//   $("#timer").hide();
//   $("#remaining-time").hide();
//   $("#question").hide();
//   timerTwo = 5;
//   $('#timerTwo').text(timerTwo);
//   // nextQuestion();
//   timerTwo();

// } 
function startGame(){
    currentSet = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
    // clearInterval(timerId);
    // $('#game').show();
    // $('#results').html('');
    // $('#timer').text(timer);
    // $('#timerTwo').text(timerTwo);
    $('#start').hide();
    
    // $('#remaining-time').show();
    nextQuestion();
  };
// function timerTwo(){
//   timerTwo = 5;
//   $('#timerTwo').text(timerTwo);
//   $("#timerTwo").show();
//   timerId = setInterval(timerRunning, 1000);
//   if (timerTwo > -1 && currentSet < Object.keys(beyonce.questions).length){
//     $('#timerTwo').text(timerTwo);
//     timerTwo--;}
//   nextQuestion();
  
// }
 function nextQuestion(){
  $(".answers").show();
   clearInterval(timerId);
    timer = 21;
    //  $('#timer').removeClass('last-seconds');
    // $("#results").hide();
    // $("#timer").show();
    
    newScreen();
    // function newScreen(){
    // $("#remaining-time").show();
    // $("#myQuestions").text(beyonce[i].question);
    // $(".answer1").text(beyonce[i].option1);
    // $(".answer2").text(beyonce[i].option2);
    // $(".answer3").text(beyonce[i].option3);
    // $(".answer4").text(beyonce[i].option4);
    // }

    // $('#timer').text(timer);
    // timerId = setInterval(timerRunning, 1000);
    // var questionContent = Object.values(beyonce.questions)[currentSet];
    // $('#question').text(questionContent);
    // var questionOptions = Object.values(beyonce.options)[currentSet];
    // $.each(questionOptions, function(index, key){
    
    // $('#options').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));

    // })
   var countDown = setInterval (timesUp, 1000);
function timesUp(){
  timer --;
  $("#timer").text(timer);
}
    
  };

  function newScreen(){
    if(i < beyonce.length){
    $("#remaining-time").show();
    $("#myQuestions").text(beyonce[i].question);
    $(".answer1").text(beyonce[i].option1);
    $(".answer2").text(beyonce[i].option2);
    $(".answer3").text(beyonce[i].option3);
    $(".answer4").text(beyonce[i].option4);
    }
    
    if (i === beyonce.length){

      $('#results')
        .html('<h3>Thank you for playing!</h3>'+
        '<p>Correct: '+ correctAnswers +'</p>'+
        '<p>Incorrect: '+ incorrectAnswers +'</p>'+
        '<p>Unaswered: '+ unanswered +'</p>'+
        '<p>Please play again!</p>');
        $("#myQuestions").hide();
        $(".answers").hide();
        $("#remaining-time").hide();
      }
  }
    
  var i = 0;
  $(document).on("click", ".answers", function(){ 
    if($(this).text() === beyonce[i].answer){
    // alert("test");
    timer = 21;
    console.log(this)
    // i++;
    correctAnswers++;
    i++;
    newScreen();
    
    } else{ 
      incorrectAnswers++;
      console.log(this)
      timer = 21;
      i++;
      newScreen();
     
    }
  
  })
//   function timerRunning(){
//     if(timer > -1 && currentSet < Object.keys(beyonce.questions).length){
//       $('#timer').text(timer);
//       timer--;
//     }
//     else if(timer === -1){
//       unanswered++;
//       result = false;
//       clearInterval(timerId);
//       resultId = setTimeout(guessResult, 1000);
//       $("#timer").hide(timer);
//       $("#remaining-time").hide();
//       $("#question").hide();
//       $('#options').hide();
//       // alert("you got it");
//       $("#results").html("Out of time! The answer was " + Object.values(beyonce.answers)[currentSet] );
//       nextQuestion();
      
//       // $("#results").html('<h3>Out of time! The answer was '+ Object.values(beyonce.answers)[currentSet] +'</h3>');
//     }
//     // if all the questions have been shown end the game, show results
//     else if(currentSet === Object.keys(beyonce.questions).length){
      
      // adds results of game (correct, incorrect, unanswered) to the page
    // if (i = beyonce.length){

    //   $('#results')
    //     .html('<h3>Thank you for playing!</h3>'+
    //     '<p>Correct: '+ correctAnswers +'</p>'+
    //     '<p>Incorrect: '+ incorrectAnswers +'</p>'+
    //     '<p>Unaswered: '+ unanswered +'</p>'+
    //     '<p>Please play again!</p>');
    //   }
//       // hide game sction
//       $('#game').hide();
      
//       // show start button to begin a new game
//       $('#start').show();
//     }
    
//   };
//  var currentAnswer = Object.values(beyonce.answers)[currentSet];
//   function guessChecker() {
//     // var resultId;
   
//     if($(this).text() === currentAnswer){
//       $(this).addClass('btn-success').removeClass('btn-info');
//       correctAnswers++;
//       clearInterval(timerId);
//       resultId = setTimeout(guessResult, 1000);
//       thankYouNext();
      
//     }
  
//     // else the user picked the wrong option, increment incorrect
//     else if($(this).text() !== currentAnswer) {
//       // turn button clicked red for incorrect
//       $(this).addClass('btn-danger').removeClass('btn-info');
      
//       incorrectAnswers++;
//       clearInterval(timerId);
//       resultId = setTimeout(guessResult, 1000);
//       // $('#results').html('<h3>Better luck next time! '+ currentAnswer +'</h3>');
//       $("#timer").hide(timer);
//       $("#remaining-time").hide();
//       $("#question").hide();
//       $('#options').hide();
//       // alert("you got it");
//       $("#results").html("Maybe next time...The answer was " + currentAnswer );
//       nextQuestion();
//     }
  

// };

 
  function guessResult(){
    currentSet++;
    $('.option').remove();
    $('#results h3').remove();
    nextQuestion();
}
