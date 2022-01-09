function submit() {


        answer_word = document.getElementById("answer_input").value;
        answer= answer_word.toLowerCase();
        
        
       
          question_word = "<h4 id='word_display'> Q."+document.getElementById("answer_input").value;"</h4>";
          input_box = "<br>Answer : <input type='text' id='input_check_box'>";
          check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
          row = question_word + input_box + check_button ;
          document.getElementById("output").innerHTML = row;
          document.getElementById("input_box").value = "";
       
       
}

question_turn = "player1";
answer_turn = "player2";
function check() {
   get_answer=document.getElementById("input_check_box").value;
 answer1 = get_answer.toLowerCase();
 console.log(answer1+" in lower case");
 if (answer1 == "answer_input") {
if(answer_turn=="player1") {
   player1_score=player1_score+1;
   document.getElementById("player1_score").innerHTML=player1_score;
}
else {
   player2_score=player2_score+1;
   document.getElementById("player2_score").innerHTML=player2_score;
}
}
 if (question_turn=="player1"){
    question_turn="player2"
    document.getElementById("player_question").innerHTML="question_term"+player2_name;
 }
else{
   question_turn="player1"
    document.getElementById("player_question").innerHTML="question_term"+player1_name;
}

if (answer_turn=="player1"){
   answer_turn="player2"
   document.getElementById("player_answer").innerHTML="answer_term"+player2_name;
}
else{
  answer_turn="player1"
   document.getElementById("player_answer").innerHTML="answer_term"+player1_name;
}
document.getElementById("output").innerHTML="";
}