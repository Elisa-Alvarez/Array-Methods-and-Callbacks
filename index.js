import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const soccerCup = fifaData.filter(function(value){
    return value["Year"] === 2014 && value["Stage"]=== "Final"
} );
console.log (soccerCup);
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
   
    return data.filter(function(item)
        {
            return item["Stage"]==="Final"});

 };
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals) {
   
 //let years = getFinals (value){
 //   return value["Year"];
 //}) ;
   let finalsData = getFinals(fifaData);
    let years = finalsData.map(function (object) {
        return object['Year'];
    });
    
 return years;
    
};
console.log(getYears(getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
     
 let winners=[];
   let letsWin= getFinals(fifaData);
    letsWin.filter(element => {
     if (element["Home Team Goals"]> element["Away Team Goals"]) {
         return winners.push(element["Home Team Name"]);
     } else {
        return winners.push(element["Away Team Name"]);
     }
 });
  return winners
}

console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getYears,getWinners) {

let years = (getYears(getFinals));
let country= (getWinners(getFinals));
 const winners= years.map((element,i)=>{
 
 return `In ${element}, ${country[i]} won the world cup!`

} );
return winners;
}
console.log(getWinnersByYear(getYears,getWinners));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
   let homeGoals= [];
   let awayGoals= [];
   data.map(element => {
    if (element["Home Team Goals"]) {
        return homeGoals.push(element["Home Team Goals"]);
    } else {
       return awayGoals.push(element["Away Team Goals"]);
    };
   });
 
  
  let home = homeGoals.reduce(function sum (accumalator,arr){
    return accumalator + arr /homeGoals.length;
    
 },0);
  
  let away= awayGoals.reduce(function sum (accumalator,arr){
    return accumalator + arr /awayGoals.length;
    
 },0);
 
return `Home Team: ${home}, Away Team: ${away}`;
}

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
