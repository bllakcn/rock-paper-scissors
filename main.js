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

const computer = getComputerChoice();
const user = prompt("Enter a choice: ").toUpperCase();

function main (computer , user) {
    console.log(user);
    console.log(computer);
     
};

main(computer, user);
