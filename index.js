/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/

const votingAge = 18;
if (votingAge >= 18) {
	console.log(true);
} else {
	console.log(false);
}

/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/
let varfirst = "first";
let varsecond = "second";
if (varfirst === "first") {
	varfirst = varsecond;
}
console.log(varfirst);
/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/
let yearint = parseInt("1999");
console.log(yearint);
/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(a, b) {
	return a * b;
}

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

function dogYears(humanYears, dogMulti) {
	dogMulti = 7;
	return humanYears * dogMulti;
}
/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/

function hungryDog(dogWeight, age, foodWeight) {
	if (age >= 1) {
		if (dogWeight <= 5) {
			return (foodWeight = dogWeight * 0.05);
		} else if (dogWeight > 5 && dogWeight <= 10) {
			return (foodWeight = dogWeight * 0.04);
		} else if (dogWeight > 10 && dogWeight <= 15) {
			return (foodWeight = dogWeight * 0.03);
		} else dogWeight > 15;
		return (foodWeight = dogWeight * 0.02);
	} else {
		if (age < 1) {
			if (age >= 0.16 && age <= 0.34) {
				return (foodWeight = dogWeight * 0.1);
			} else if (age > 0.34 && age <= 0.59) {
				return (foodWeight = dogWeight * 0.05);
			} else age > 0.59 && age <= 0.99;
			foodWeight = dogWeight * 0.04;
		}
	}
	console.log(`Dog weighted statistic -->`, foodWeight);
	return foodWeight;
}

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/
const computer = Math.random();

function game(user, computer) {
	let computersChoice = "";
	let result = "";
	function computerPick(computer) {
		if (computer <= 1 && computer > 0.66666) {
			computersChoice = "rock";
		} else if (computer <= 0.666666 && computer > 0.34) {
			computersChoice = "scissors";
		} else if (computer <= 0.333333) {
			computersChoice = "paper";
		}
		return computersChoice;
	}

	console.log(computerPick(computer));

	if (computersChoice === "rock" && user === "rock") {
		result = "it's a tie";
	} else if (computersChoice === "rock" && user === "paper") {
		result = "you win!";
	} else if (computersChoice === "rock" && user === "scissors") {
		result = "you win!";
	} else if (computersChoice === "paper" && user === "rock") {
		result = "you lose!";
	} else if (computersChoice === "paper" && user === "paper") {
		result = "it's a tie";
	} else if (computersChoice === "paper" && user === "scissors") {
		result = "you win!";
	} else if (computersChoice === "scissors" && user === "rock") {
		result = "you win!";
	} else if (computersChoice === "scissors" && user === "paper") {
		result = "you lose!";
	} else if (computersChoice === "scissors" && user === "scissors") {
		result = "it's a tie";
	}
	return result;
}

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter
//Task 5a - KM to Miles
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

function miles(km, mconvert) {
	km = 10;
	mconvert = 0.621371;
	return km * mconvert;
}

//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

function feet(cm, ftconvert) {
	cm = 160;
	ftconvert = 30.48;
	return cm / ftconvert;
}

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number received 
  2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

function annoyingSong(num) {
	for (let i = num; i > 0; i--) {
		console.log(
			i +
				" bottles of soda on the wall, " +
				i +
				" bottles of soda, take one down pass it around " +
				(i - 1) +
				" bottles of soda on the wall."
		);
	}
}

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 should return 'you got an A' 
   80-89 should return 'you got a B'
   70-79 should return 'you got a C'
   60-69 should return 'you got a D'
   below should return 'you got an F'
*/

function grade(score) {
	if (score >= 90) {
		return "you got an A";
	} else if (score >= 80) {
		return "you got a B";
	} else if (score >= 70) {
		return "you got a C";
	} else if (score >= 60) {
		return "you got a D";
	} else score < 60;
	return "you got an F";
}

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/

function vowelCounter(/*add your code here*/) {
	/*add your code here*/
}

/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo() {
	//console.log('its working');
	return "bar";
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default {
	foo,
	multiply,
	dogYears,
	hungryDog,
	game,
	miles,
	feet,
	annoyingSong,
	grade,
};
