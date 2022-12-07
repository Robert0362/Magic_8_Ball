'use strict'
const userName= '';
const userQuestion = '';
const outcomeBtn = document.getElementById('outcomeBtn');
const outcome = document.getElementById('outcome');
let eightBall = '';




//userName ? console.log(`Hello ${userName}`):console.log(`Hello`);
//console.log(userName + userQuestion);
outcomeBtn.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random()* 8);
    switch(randomNumber){
        case 0:
            eightBall = 'It is certain';
            break;
        case 1:
            eightBall = 'You my sources say your crazy';
            break;
        case 2:
            eightBall = 'Outlook is as good a Biden remembering his name';
            break;
        case 3:
            eightBall = `Reply is as hazy as Biden's memory, try again`;
            break;
        case 4:
            eightBall = 'My sources say NO!';
            break;
        case 5:
            eightBall = 'I cannot say at this time';
            break;
        case 6:
            eightBall = `Why are you asking me I don't know`;
            break;
        case 7:
            eightBall = 'Signs point to yes and Desantis 2024';
            break;
    }
    outcome.innerText=eightBall;
    outcome.style.fontSize = 'medium';
    console.log(eightBall);
    setTimeout('clear()', 10000 );
});

function clear(){
    outcome.innerText = '8';
    outcome.style.fontSize = 'xx-large';
}