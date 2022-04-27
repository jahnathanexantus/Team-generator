const Manager = require("./lib/manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const inquirer = require("inquirer");

// teamlist array
const teamList = [];

// manager prompts
const includeManager = () => {
	 return inquirer.prompt([
		{
			type: "input",
			name: "name",
			massage: "what is the manager's name",
			
		},
		{
			type: "input",
			name: "id",
			massage: "put in the manager's id",
			
		},
		{
			type: "input",
			name: "email",
			massage: "enter the Manager's email.",
		
		},
		{
			type: "input",
			name: "officeNumber",
			massage: "Enter the Manager's office number",
			
		},
	])
    .then(managerInput =>{
        const {name,id,email,officeNumber} = managerInput;
        const manager = new Manager (name,id,email,officeNumber);

        teamList.push(manager);
        console.log(manager);
    })
};

const includeEmployee = () => {
	console.log('Including employee to the team');

	return inquirer.prompt([
		{
			type: 'list',
			name: 'role',
			message: "Choose your employee's role",
			choices: ['Engineer','Intern']
		},
		{
			
		}
	])
}