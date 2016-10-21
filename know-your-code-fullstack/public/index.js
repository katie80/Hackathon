/* jshint esversion:6 */
$(function() {
  var currentLevel = 0;

    randomizeOptions();

    $.get('/levels', function(res) {
      $('#level_div').text(res[currentLevel].title);
      $('#question').text(res[currentLevel].question);
      $('#answer1').html(res[currentLevel].options[0]);
      $('#answer2').html(res[currentLevel].options[1]);
      $('#answer3').html(res[currentLevel].options[2]);
    });

    $('.answers').click(function(){
      if($(this).attr('id') === "answer1"){
        $(this).css("background-color","green");
      } else {
        $(this).css("background-color","red");
      }
    });

    $('#next_question_btn').click(function(){
      currentLevel++;
      $.get('/levels', function(res) {
          $('#level_div').text(res[currentLevel].title);
          $('#question').text(res[currentLevel].question);
          $('#answer1').html(res[currentLevel].options[0]);
          $('#answer2').html(res[currentLevel].options[1]);
          $('#answer3').html(res[currentLevel].options[2]);
        });
    });
});

function randomizeOptions(){
  var randPermutation = [];

  while(randPermutation.length < 3){

    var randIndex = Math.floor(Math.random() * 3);
  
    if(!randPermutation.includes(randIndex)){
      randPermutation.push(randIndex);
    }
  }
  // Test change

  console.log(randPermutation);
}

var score = 0;

function updateScore() {
  // if (correct) {
    score += (100 - timer.toFixed(1));
    return;
  // }
  // return;
}
$('#score').text(score);

var timer = 60;
var timerInterval = setInterval(() => {
  console.log(timer);
  if(timer < 0) {
   clearInterval(timerInterval);
  } else {
    minuteTimer();
  }
}, 100);

function minuteTimer() {
  timer -= 0.1;
  $('#timer').text(timer.toFixed(1));
  $('#fuse').css("width", 100 - timer/0.6 + "%");
}
