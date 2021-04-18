//Imported from the class functions
const Manager = require("./jobTitles/manager");
const Engineer = require("./jobTitles/engineer");
const Intern = require("./jobTitles/intern");



const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "viewResults");
const outputPath = path.join(OUTPUT_DIR, "squad.html");
const generate = require("./jobTitles/generate");
const { prompt } = require("inquirer");

const team = [];
let employee = [];


//the functions below will confirm user input the validator functions, 
const confirmId = (input) => {
  if (isNaN(input) || input === "" || input === "0") {
    return "Please enter a number greater than zero";
  } else {
    return true;
  }
};

const confirmEmail = (input) => {
  if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(input) || input === "") {
    return true;
  } else {
    return "Please enter an email";
  }
};

const confirmInput = (input) => {
  if (input === "") {
    return "Blank input! please enter an input";
  } else {
    return true;
  }
};

// user input in the command line

const selections = {
  message: "Please choose a role to add",
  type: "list",
  name: "role",
  choices: ["Manager", "Engineer", "Intern", "Exit"], 
};

const manager = {
  message: "Office number of your Manager?",
  type: "input",
  name: "officeNumber",
  validate: confirmInput,
};

const engineer = {
  message: "Engineers GitHub Name?",
  type: "input",
  name: "GitHub",
  validate: confirmInput,
};

const intern = {
  message: "Interns school?",
  type: "input",
  name: "school",
  validate: confirmInput,
};

function choice() {
  employee = [
    {
      message: "Employees name?",
      type: "input",
      name: "name",
      validate: confirmInput,
    },
    {
      message: "Employees ID number?",
      type: "input",
      name: "id",
      validate: confirmId,
    },
    {
      message: "Employees email address?",
      type: "input",
      name: "email",
      validate: confirmEmail,
    },
  ];

  inquirer.prompt(selections).then((response) => {
    switch (response.role) { 
      case "Manager": 
        addManager();
        break;
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      case "Exit":
        getTeam();
        break;
    }
  });
}

function getTeam() {
  const html = generate(team);
  fs.writeFile(outputPath, html, (err) => {
    if (err) throw err;
    console.log("No errors detected!! Success!");
  });
}

function addIntern() {
    employee.push(intern);
    prompt(employee).then((response) => {
      const intern = new Intern(response.name, response.id, response.email, response.school);
      team.push(intern);
      choice();
    });
  }

function addManager() {
  employee.push(manager);
  prompt(employee).then((response) => {
    const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
    team.push(manager);
    choice();
  });
}

function addEngineer() {
  employee.push(engineer);
  prompt(employee).then((response) => {
    const engineer = new Engineer(response.name, response.id, response.email, response.GitHub);
    team.push(engineer);
    choice();
  });
}

choice();