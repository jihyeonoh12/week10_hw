const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

startApp();

function startApp() {
    inquirer.prompt([
        {
            type:"list",
            name:"type",
            message:"Which type do you want to add?",
            choices: ["Manager", "Engineer", "Intern"]

        }
    ]).then(function(answer) {
        if (answer.type === "Manager") {
            createManager();
        }
        if (answer.type === "Engineer") {
            createEngineer();
        }
        if (answer.type === "Intern") {
            createIntern();
        }
    })
};

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is your manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "what is your manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "what is your manager's email?"
        },
        {
            type: "input",
            name: "office",
            message: "what is your manager's office number?"
        }
    ]).then(function (answer) {
        const createdManager = new Manager(answer.name, answer.id, answer.email, answer.office);
        team.push(createdManager);
        addNewMember();
    })
};

function addNewMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "type",
            message: "what is position of new member?",
             choices:["Manager", "Engineer", "Exit"]
        }
    ]).then(function(answer) {
        if(answer.type === "Engineer") {
            createEngineer();
        }
        else if(answer.type === "Intern") {
            createIntern();
        }
        else {
            render(team);
        }
    })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "what is the engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "what is the engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "what is the engineer's github?"
        }
    ]).then(function (answer) {
        const createdManager = new Manager(answer.name, answer.id, answer.email, answer.github);
        team.push(createdManager);
        addNewMember();
    })
};

function addNewMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "type",
            message: "what is position of new member?",
             choices:["Manager", "Engineer", "Exit"]
        }
    ]).then(function(answer) {
        if(answer.type === "Engineer") {
            createEngineer();
        }
        else if(answer.type === "Intern") {
            createIntern();
        }
        else {
            return;
        }
    })
}

