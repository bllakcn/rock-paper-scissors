function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    let result;
    if (index === 0){
        result = "ROCK";
    }
    else if (index === 1){
        result = "PAPER";
    }
    else if (index === 2){
        result = "SCISSORS";
    }
    return result;
};

function round (computer , user) {
    let result;
    if(user === "ROCK"){
        if(computer === "PAPER"){
            result = "fail";
        }
        if(computer === "SCISSORS"){
            result = "win";
        }
        if(computer === "ROCK"){
            result = "tie";
        }
    };
    if(user === "PAPER"){
        if(computer === "PAPER"){
            result = "tie";
        }
        if(computer === "SCISSORS"){
            result = "fail";
        }
        if(computer === "ROCK"){
            result = "win";
        }
    };
    if(user === "SCISSORS"){
        if(computer === "PAPER"){
            result = "win";
        }
        if(computer === "SCISSORS"){
            result = "tie";
        }
        if(computer === "ROCK"){
            result = "fail";
        }
    };
    return result;
};

function game(){
    for(let i = 0; i < 5; i++){
        const computer = getComputerChoice();
        const user = prompt("Enter a choice: ").toUpperCase();
        console.log(round(computer, user));
    }
};

game();