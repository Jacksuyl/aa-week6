const { get } = require('http');
const readline = require('readline');
const { serialize } = require('v8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let min, max, secretNumber;
const attempts = {
    numAttempts: 0,
};

//1th step: get a secret number between min and max number

function getsecretNumber(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//start interactive part

//2th step: get min & max number from user
function askRange(){
    askLimit();
    getMax ();
    getMin ();
}

function askLimit(){
    rl.question("Enter an attemp number: ",(getLimit) =>{
        const limitNum =Number(getLimit);

        if(isNaN(limitNum)){
            console.log("attemp number should be a number");
            askLimit();//error, restart askRange part;
        }else{
            attempts.numAttempts = limitNum;
            getMax();
        }
});
}

function getMax () {
    rl.question("Enter a max number: ",(getmax) =>{
       const maxInput =Number(getmax);

    if(isNaN(maxInput)){
        console.log("max should be a number");
        getMax();//error, restart askRange part;
    }else{
        max = maxInput;
        getMin();
    }
})
};

function getMin(){
    rl.question("Enter a min number: ",(getmin) =>{
        const minInput =Number(getmin)

        if(isNaN(minInput)){
            console.log("min should be a number");
            getMin();//error, restart askRange part;
        }else if(minInput >= max){
                console.log('min number should less than max number,re-enter min number');
                getMin();
        }else{
            min =minInput;
            secretNumber = getsecretNumber(min,max);
            console.log('the secret number is ' + secretNumber);
            console.log(`I'm thinking of a number between ${min} and ${max}...`)

            askGuess();
        }
        })
    };



//3th step: start the game, ask user's guerssing number
function askGuess(){
    rl.question("Enter a guess: ", (answer) =>{
        if(isNaN(answer)){
            console.log('Valid,you should guess a number');
            askGuess();
        }
        const guessnumber = Number(answer);//hositing str variable to number
        //check is it a number and the correct one
        const isCorrcet = checkGuess(guessnumber,rl);
        if(!isCorrcet){
            askGuess(); //recursively until the answer is correct
        }else{
            rl.close();
            }
    });
};

//4th step: check the answer
function checkGuess(guessnumber){
    console.log("Last numAttempts is "+ attempts.numAttempts)
    if(attempts.numAttempts === 0){
        console.log('You Lose');
        rl.close();
        }
    else if(guessnumber > secretNumber){
        console.log ('Too high.');
        attempts.numAttempts-- ;
        return false;
    }else if(guessnumber < secretNumber){
        console.log( 'Too low.');
        attempts.numAttempts-- ;
        return false;
    }else if(guessnumber === secretNumber){
        console.log('Correct!');
        return true;
    }}


askRange();
