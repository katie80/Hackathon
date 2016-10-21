$(function() {
  var currentLevel = 0;

    $.get('/levels', function(res) {
      $('#level_div').text(res[currentLevel].title);
      $('#question').text(res[currentLevel].question);

      if(res[currentLevel].isRendered){
        $('#answer1').html(res[currentLevel].options[0]);
        $('#answer2').html(res[currentLevel].options[1]);
        $('#answer3').html(res[currentLevel].options[2]);
      } else {
        $('#answer1').text(res[currentLevel].options[0]);
        $('#answer2').text(res[currentLevel].options[1]);
        $('#answer3').text(res[currentLevel].options[2]);
      }
    });

    $('.answers').click(function(){
      $(this).css("background-color","grey");
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


var timerInterval = setInterval(myCallback, 100);
var timer = 60;
function myCallback() {
  timer -= 0.1;
  if(timer == 58) {
    clearInterval(timerInterval);
  }
  $('#timer').text(timer.toFixed(1));
  $('#fuse').css("width", 100 - timer/0.6 + "%");
}
