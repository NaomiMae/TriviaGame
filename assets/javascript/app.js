$(document).ready(function () {
  $("#remaining-time").hide();
  $("#gap-time").hide();
  $(".answers").hide();
  $("#image").hide();
  $("#start").on("click", startGame);
  // $(document).on('click' , '.option', guessChecker);
  // $("#firstAnswer").hide(); 
});

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var currentSet = 0;
var timer = 21;
var timerTwo;
var timerOn = false;
var timerId = "";
var timerStart = "";


var beyonce = [{
  question: "What year was Beyonce born?",
  option1: "1981",
  option2: "1980",
  option3: "1982",
  option4: "1985",
  answer: "1981",
  img: "assets/images/BeyonceBaby.gif",

},
{
  question: "Where was Beyonce born?",
  option1: "Dallas, Tx",
  option2: "Houston, Tx",
  option3: "Atlanta, Ga",
  option4: "New York, Ny",
  answer: "Houston, Tx",
  img: "assets/images/Houston.gif",
},
{
  question: "When did Beyonce go solo?",
  option1: "2002",
  option2: "2003",
  option3: "2006",
  option4: "2005",
  answer: "2003",
  img: "assets/images/Single.gif",
},
{
  question: "What's a name of a Beyonce's album?",
  option1: "Drunk in Love",
  option2: "Information",
  option3: "Beyonce",
  option4: "Tasha Farce",
  answer: "Beyonce",
  img: "assets/images/Beyonce.gif",
},
{
  question: "What's the name of Beyonce's first born?",
  option1: "Saint",
  option2: "Red",
  option3: "Violet",
  option4: "Blue",
  answer: "Blue",
  img: "assets/images/Blue.gif",
},]


function startGame() {
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
// need to stu[]
function nextQuestion() {
  $(".answers").show();
  clearInterval(timerId);
  timer = 21;
  //  $('#timer').removeClass('last-seconds');
  // $("#results").hide();
  // $("#timer").show();

  newScreen();

  //    var countDown = setInterval (timesUp, 1000);
  // timesUp();
  // function timesUp(){
  //   timer --;

  //   $("#timer").text(timer);
  //   if (timer === 0){
  //     clearInterval(countDown);
  //     i++;
  //     newScreen();
  //     unanswered++;

  //   }
  // }

};
function yayYou() {
  gifTimer();
  // timerTwo = 5;
  // timerTwo--;
  // clearInterval(countDown);
  $("#gap-time").show();
  $("#timeTwo").show();
  $("#timerTwo").text(timerTwo);
  $("#myQuestions").hide();
  $(".answers").hide();
  $("#remaining-time").hide();
  $("#answersShown").show();
  $("#answersShown").text("Yay you got it! The correct answer was " + (beyonce[i].answer));
  $("#image").show();
  $("#image").attr("src", beyonce[i].img);
  
}
// if (timerTwo === 0){
//   newScreen();
//   }
function booYou() {
  gifTimer();
  $("#gap-time").show();
  $("#timeTwo").show();
  $("#timerTwo").text(timerTwo);
  // timer = 5;
  // clearInterval(countDown);
  $("#myQuestions").hide();
  $(".answers").hide();
  $("#remaining-time").hide();
  $("#answersShown").show();
  $("#answersShown").text("So sorry the correct answer was " + (beyonce[i].answer));
  $("#image").show();
  $("#image").attr("src", beyonce[i].img);
  // if (timer <== 0){
  // newScreen();
}

// var countDown = setInterval(timesUp, 1000);


function timesUp() {
  timer--;

  $("#timer").text(timer);
  if (timer === 0) {
    // clearInterval(countDown);
    // i++;
    timerTwo = 8;
    unanswered++;
    $("#gap-time").show();
    // i++;
    gifTimer();
    booYou();
  }
}
function gifTimer(){
  timerTwo--;
  $("#timerTwo").text(timerTwo);
  if (timerTwo === 0) {
    // i++;
  // clearInterval(shortTime);
  $("#image").hide();
  $("#myQuestions").show();
  $(".answers").show();
  $("#timerTwo").hide();
  $("#answersShown").hide();
  $("#gap-time").hide();
  i++;
  newScreen();
}
}
  function newScreen() {
    console.log("here");
    timer = 21;
    timer--;
    $("#timer").text(timer);
    // timesUp();
    // startInterval(reStart);

    if (i < beyonce.length) {
      $("#remaining-time").show();
      $("#myQuestions").text(beyonce[i].question);
      $(".answer1").text(beyonce[i].option1);
      $(".answer2").text(beyonce[i].option2);
      $(".answer3").text(beyonce[i].option3);
      $(".answer4").text(beyonce[i].option4);
        // i++
      // $("#firstAnswer").
      // if (timer === 0){
      //   clearInterval(timerId);
      //   i++;
      //   newScreen();
      //   unanswered
      // }
    }

    if (i === beyonce.length) {

      $('#results')
        .html('<h3>Thank you for playing!</h3>' +
          '<p>Correct: ' + correctAnswers + '</p>' +
          '<p>Incorrect: ' + incorrectAnswers + '</p>' +
          '<p>Unaswered: ' + unanswered + '</p>' +
          '<p>Please play again!</p>');
      $("#myQuestions").hide();
      $(".answers").hide();
      $("#remaining-time").hide();
    }
  }
  // var reStart = startInterval ( timesUp, 1000);  
var countDown = setInterval(timesUp, 1000);

var shortTime = setInterval(gifTimer, 1000);


  // function timesUp() {
  //   timer--;

  //   $("#timer").text(timer);
  //   if (timer === 0) {
  //     clearInterval(countDown);
  //     i++;
  //     booYou();
  //     unanswered++;

  //   }
  // }

  var i = 0;
  $(document).on("click", ".answers", function () {
    timer = 21;
    timerTwo = 6;
    gifTimer();
    if ($(this).text() === beyonce[i].answer) {
      // alert("test");
      timer = 21;
      console.log(this)
      correctAnswers++;
      // i++;
      $("#timerTwo").show();
      yayYou();
      // newScreen();

    } else {
      incorrectAnswers++;
      console.log(this)
      timer = 21;
      timerTwo = 6;
      // i++;
      gifTimer();
      booYou();
      $("#timerTwo").show();
      // newScreen();

    }

  })

  function guessResult() {
    currentSet++;
    $('.option').remove();
    $('#results h3').remove();
    nextQuestion();
  }