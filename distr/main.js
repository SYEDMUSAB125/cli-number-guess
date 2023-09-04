import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
const genNum = Math.floor(Math.random() * 10);
console.log(chalk.bgYellowBright("Welcome! you have only 3 chances to guess the number"));
let i = 0;
while (i < 3) {
    const answer = await inquirer.prompt([{
            message: "Guess your number between 1 to 10",
            type: "number",
            name: "num"
        }]);
    if (answer.num === genNum) {
        console.log(chalk.magentaBright("Congrats! you guessed the correct number \n "));
        chalkAnimation.rainbow("YOU WON");
        let score = () => {
            let count = 0;
            return count += 10;
        };
    }
    else {
        console.log(chalk.red("oops better luck! try next time"));
    }
    ;
    i++;
}
