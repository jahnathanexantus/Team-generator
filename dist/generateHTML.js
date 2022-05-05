const Manager = require("../lib/manager");

const generateManager = function (Manager) {
	return `<div class="col-4 mt-4">
    <div class="card border-secondary mb-3" style="max-width: 18rem">
        <div class="card-header">${Manager.name}</div>

        <div class="card-body text-secondary">
            <ul>
                <li>ID:${Manager.id}</li>
                <li>EMAIL:${Manager.email}</li>
                <li>OFFICE NUMBER:${Manager.officeNumber}</li>
            </ul>
        </div>
    </div>
</div>
`;
};

const generateEngineer = function (engineer) {
	return `<div class="col-4 mt-4">
    <div class="card border-secondary mb-3" style="max-width: 18rem">
        <div class="card-header">${engineer.name}</div>

        <div class="card-body text-secondary">
            <ul>
                <li>ID:${engineer.id}</li>
                <li>EMAIL:${engineer.email}</li>
                <li>GITHUB:${engineer.github}</li>
            </ul>
        </div>
    </div>
</div>
`;
};

const generateIntern = function (intern) {
	return `<div class="col-4 mt-4">
    <div class="card border-secondary mb-3" style="max-width: 18rem">
        <div class="card-header">${intern.name}</div>
    
        <div class="card-body text-secondary">
            <ul>
                <li>ID:${intern.id}</li>
                <li>EMAIL:${intern.email}</li>
                    <li>SCHOOL:${intern.school}</li>
            </ul>
        </div>
    </div>
</div>
`;
};

generateHTML = (data) => {
	pageArray = [];

	for (let i = 0; i < data.length; i++) {
		const employee = data[i];
		const role = employee.getRole();

		if (role === "Manager") {
			const managerCard = generateManager(employee);
			pageArray.push(managerCard);
		}

		if (role === "Engineer") {
			const engineerCard = generateEngineer(employee);

			pageArray.push(engineerCard);
		}

		if (role === "Intern") {
			const internCard = generateIntern(employee);

			pageArray.push(internCard);
		}
	}

	const employeeCards = pageArray.join("");
	const generateTeam = generateTeamPage(employeeCards);
	return generateTeam;
};

const generateTeamPage = function (employeeCards) {
	return ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
    />
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    />
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>
    
    </html>
`;
};
module.exports = generateHTML;
