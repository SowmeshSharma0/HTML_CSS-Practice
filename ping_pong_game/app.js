let win_score = 5;
let player1_score = 0;
let player2_score = 0;

const select_ele = document.querySelector("#win_score");
const player1_btn = document.querySelector(".game_controls .player1");
const player2_btn = document.querySelector(".game_controls .player2");
const reset_div = document.querySelector(".game_controls .reset");
const actual_score = document.querySelector(".game_screen .content .score");

select_ele.addEventListener('change', (e)=>{
    win_score = e.target.value;
    player1_score = 0;
    player2_score = 0;
    actual_score.innerText = "0 to 0";
});

player1_btn.addEventListener('click', ()=>{
    player1_score++;
    actual_score.innerText = `${player1_score} to ${player2_score} `;
    if(player1_score == win_score)
        results_callback(1);
});

player2_btn.addEventListener('click', ()=>{
    player2_score++;
    actual_score.innerText = `${player1_score} to ${player2_score} `;
    if(player2_score == win_score)
        results_callback(2);
});

reset_div.addEventListener('click', ()=>{
    player1_score=0;
    player2_score=0;
    actual_score.innerText = "0 to 0";

    player1_btn.disabled = false;
    player2_btn.disabled = false;
    setTimeout(function(){
        player1_btn.style.opacity = 1;
        player2_btn.style.opacity = 1;
    }, 100); 
})

const results_callback = (winner) => {
    const player1_ele = document.createElement("span");
    const to_txt = document.createElement("span");
    const player2_ele = document.createElement("span");

    player1_ele.innerText = player1_score;
    player2_ele.innerText = player2_score;
    to_txt.innerText = " to ";

    if(winner == 1){
        player1_ele.style.color = "green";
        player2_ele.style.color = "red";
    }
    else{
        player2_ele.style.color = "green";
        player1_ele.style.color = "red";
    }

    const new_score_ele = document.createElement("p");
    new_score_ele.append(player1_ele, to_txt, player2_ele);
    actual_score.innerHTML = new_score_ele.innerHTML;
    // console.log(player1_ele)
    // console.log(player2_ele)
    // console.log(to_txt);

    player1_btn.disabled = true;
    player2_btn.disabled = true;
    setTimeout(function(){
        player1_btn.style.opacity = 0.5;
        player2_btn.style.opacity = 0.5;
    }, 100); 
}
