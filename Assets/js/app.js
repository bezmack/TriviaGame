$( document ).ready(function() {

  var triviaOne = {
    question: 'In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?',
    choice1: 'William and Elizabeth',
    choice2: 'Joseph and Catherine',
    choice3: 'John and Mary',
    choice4: 'George and Anne',
    answer: 'John and Mary',
    info: "<img  class= 'img-responsive' width=400 src='Assets/images/baby.jpeg'>"
  };

  var triviaTwo = {
    question: 'When did the Liberty Bell get its name?',
    choice1: 'when it was made, in 1701',
    choice2: 'when it rang on July 4, 1776',
    choice3: 'in the 19th century, when it became a symbol of the abolition of slavery',
    choice4: 'none of the above',
    answer: 'in the 19th century, when it became a symbol of the abolition of slavery',
    info: "<img  class= 'img-responsive' width=400 src='Assets/images/liberty-bell.jpg'>"
  };

  var triviaThree = {
    question: 'During the 1980s for six consecutive years what breed of dog was the most popular in the U.S.?',
    choice1: 'cocker spaniel',
    choice2: 'German shepherd',
    choice3: 'Labrador retriever',
    choice4: 'poodle',
    answer: 'cocker spaniel',
    info: "<img  class= 'img-responsive' width=400 src='Assets/images/dog.jpg'>"
  };

  var triviaFour = {
    question: 'What year was it that the Census Bureau first reported that a majority of new mothers  were remaining in the new job market?',
    choice1: '1968',
    choice2: '1978',
    choice3: '1988',
    choice4: '1965',
    answer: '1988',
    info: "<img  class= 'img-responsive' width=400 src='Assets/images/women.jpg'>"
  };

  var triviaFive = {
    question: 'Which of these characters turned 40 years old in 1990?',
    choice1: 'Charlie Brown',
    choice2: 'Bugs Bunny',
    choice3: 'Mickey Mouse',
    choice4: 'Fred Flintstone',
    answer: 'Charlie Brown',
    info: "<img  class='img-responsive'  src='Assets/images/charlie.png'>"
  };

  var triviaSix = {
    question: 'The Brownie Box Camera introduced by Eastman Kodak in 1900 had a retail price of what?',
    choice1: '$1',
    choice2: '$5',
    choice3: '$10',
    choice4: '$20',
    answer: '$1',
    info: "<img  class= 'img-responsive' src='Assets/images/kodak.gif'>"
  };

  var triviaSeven = {
    question: 'The first black American pictured on a U.S. postage stamp was who?',
    choice1: 'Frederick Douglass',
    choice2: 'Booker T. Washington',
    choice3: 'Louis Armstrong',
    choice4: 'Joe Louis',
    answer: 'Joe Louis',
    info: "<img  class= 'img-responsive' src='Assets/images/stamp.jpg'>"
  };

  var triviaEight = {
    question: 'When Mt. St. Helens erupted on May 18, 1980, how many people were killed?',
    choice1: '1',
    choice2: '57',
    choice3: '157',
    choice4: '1571',
    answer: '57',
    info: "<img  class= 'img-responsive' src='Assets/images/helen.jpg'>"
  };

  var triviaNine = {
    question: 'Florence Nightingale became known as "the Lady With the Lamp" during which war??',
    choice1: 'American Civil War',
    choice2: 'Crimean War',
    choice3: 'World War I',
    choice4: 'None of the above',
    answer: 'Crimean War',
    info: "<img  class= 'img-responsive'  src='Assets/images/florence.jpg'>"
  };

  var triviaTen = {
    question: 'In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?',
    choice1: '8',
    choice2: '18',
    choice3: '38',
    choice4: '58',
    answer: '18',
    info: "<img  class= 'img-responsive'  src='Assets/images/more.jpg'>"
  };

  var triviaQuestion = [
    triviaOne,
    triviaTwo,
    triviaThree,
    triviaFour,
    triviaFive,
    triviaSix,
    triviaSeven,
    triviaEight,
    triviaNine,
    triviaTen
  ];

  var questions = [];
  var num =0;
  var time =30;
  var numberCorrect = 0;
  var numberWrong = 0;
  var numTimeout = 0;


  function nextquestion() {
    time = 30;
    counter = setInterval(increment, 1000);
    increment();
    $(".question").html(questions[num].question);
    $(".ans1").html(questions[num].choice1);
    $(".ans2").html(questions[num].choice2);
    $(".ans3").html(questions[num].choice3);
    $(".ans4").html(questions[num].choice4);
    $(".info").empty();
  };


  function increment() {
    time--
    $(".timer").html("<h2>Time Remaining: " + time + "</h2>")
    if (time == 0) {
      timeout();
      stop();
      $(".choice").empty();
    }
  };


  function stop() {
    clearInterval(counter);
    num++;
    if (num == questions.length) {
      setTimeout(endgame,2000);
    }
    else {
      setTimeout(nextquestion,2000);
    };
  };


  function correctanswer() {
    $(".question").html("<p>Correct</p>");
    $(".info").html("<p>"+questions[num].info+"</p>");
  };

  function wronganswer() {
    numberWrong++;
    $(".question").html("<p>Wrong! <br> The correct answer was: " + questions[num].answer + "</p>");
    $(".info").html("<p>"+questions[num].info+"</p>");
  };


  function timeout() {
    numTimeout++;
    $(".question").html("<p>Time's up! <br> The correct answer was: " + questions[num].answer + "</p>");
    $(".info").html("<p>"+questions[num].info+"</p>");
  };

  function endgame() {
    $(".question").html("<h2>You got " + numberCorrect + " answers correct!</h2>"
       + "<h2>You got " + numberWrong + " wrong!</h2>" + "<h2>You didn't answer "  + numTimeout +  " questions</h2>");
    $(".choice").empty();
    $("timer").empty();
    $(".info").empty();
    num = 0;
    numberCorrect = 0;
    numberWrong = 0;
    numTimeout = 0;
    $("button").show();
  };
  $(".startButton").click(function(){
    questions = triviaQuestion;
    nextquestion();
    $("button").hide();
    $(".intro").hide();
  })

  $(".choice").click(function() {

      if($(this).text() == questions[num].answer) {
        numberCorrect++;
        correctanswer();
        stop();
      }

      else {
        wronganswer();
        stop();
      };

    function renderButton() {
      var choices = [];
      console.log('ready!');

      $('.choice').empty();

      for (i = 0;i<choices.length; i++){
        var choices = $('<button>').html(choice[i]);
        $('.choice').append(choices)
      }
    }

      $(".choice").empty();

  });




});
