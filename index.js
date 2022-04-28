const generateHTML = require('./dist/generateHTML.js')


const Manager = require("./lib/manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const inquirer = require('inquirer');




// teamlist array
const teamList = [];

// manager prompts
const includeManager = () => {
	return inquirer
		.prompt([
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
		.then((managerInput) => {
			const { name, id, email, officeNumber } = managerInput;
			const manager = new Manager(name, id, email, officeNumber);

			teamList.push(manager);
			console.log(manager);
		});
};

const includeEmployee = () => {
	console.log("Including employee to the team");

	return inquirer
		.prompt([
			{
				type: "list",
				name: "role",
				message: "Choose your employee's role",
				choices: ["Engineer", "Intern"],
			},
			{
				type: "input",
				name: "name",
				message: "what's the name of the employee?",
			},
			{
				type: "input",
				name: "id",
				message: "Enter the employee's id.",
			},
			{
				type: "input",
				name: "email",
				message: "Enter the employee's email.",
			},
			{
				type: "input",
				name: "github",
				message: "Enter the employee's github username.",
				when: (input) => input.role === "Engineer",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Enter the employee's github username");
					}
				},
			},
			{
				type: "input",
				name: "school",
				message: "Enter the Intern's school",
				when: (input) => input.role === "Intern",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Enter the Intern's school");
					}
				},
			},
			{
				type: "confirm",
				name: "confirmIncludeEmployee",
				message: "Would you like to put more team members?",
				default: false,
			},
		])
		.then((employeeInfo) => {
			let { name, id, email, role,github, school, confirmIncludeEmployee } =
				employeeInfo;
			let employee;

			if (role === "Engineer") {
				employee = new Engineer(name, id, email, github);

				console.log(employee);
			} else if (role === "Intern") {
				employee = new Intern(name, id, email, school);

				console.log(employee);
			}

			teamList.push(employee);

			if (confirmIncludeEmployee) {
				return includeEmployee(teamList);
			} else {
				return teamList;
			}
		});
};

const writeFile = (data) => {
	fs.writeFile("./dist/team.html", data, (err) => {
		if (err) {
			console.log(err);
			return;
		} else {
			console.log(
				"Team profile has been successfully created! Check index.html"
			);
		}
	});
};

includeManager()
.then(includeEmployee)
.then(teamList => {
	return generateHTML(teamList);
})
.then(pageHTML => {
	return writeFile(pageHTML);
})
.catch(err => {
	console.log(err);
});