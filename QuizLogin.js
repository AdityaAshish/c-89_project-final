function StartQuiz(){
    player1_name= document.getElementById("player1Login").value;
    player2_name= document.getElementById("player2Login").value;
    localStorage.setItem("player1name", player1_name);
    localStorage.setItem("player2name", player2_name);
    window.location="game.html";
}