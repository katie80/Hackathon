/* jshint esversion:6 */
$(function() {
  var currentLevel = 0;

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
