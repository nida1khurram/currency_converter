import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 277.54,
    IND: 83.30,
    RIYAL: 0.27,
    EUR: 0.92,
};
let user_ans = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "Enter From Currency",
        choices: ['USD', 'PKR', 'IND', 'RIYAL', 'EUR'],
    },
    {
        name: "to",
        type: "list",
        message: "Enter To Currency",
        choices: ['USD', 'PKR', 'IND', 'RIYAL', 'EUR'],
    },
    {
        name: "money",
        type: "number",
        message: "Enter Your Money",
    },]);
let fromAmount = currency[user_ans.from]; //exchange rate
let toAmount = currency[user_ans.to]; //exchange rate
let amount = user_ans.money;
let baseAmount = amount / fromAmount; //convert usd base currency
let convertedAmount = baseAmount * toAmount;
console.log(Math.round(convertedAmount));
