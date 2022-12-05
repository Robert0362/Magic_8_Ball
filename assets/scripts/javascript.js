'use strict'
const userName= '';
const userQuestion = '';
let eightBall = '';

let randomNumber = Math.floor(Math.random()* 8);

userName ? console.log(`Hello ${userName}`):console.log(`Hello`);

console.log(userName + userQuestion);

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

console.log(eightBall);