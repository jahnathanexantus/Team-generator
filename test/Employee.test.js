const { hasUncaughtExceptionCaptureCallback } = require("process");
const { getSystemErrorName } = require("util");
const { isTypedArray } = require("util/types");
const Employee = require("../lib/Employee");

describe("Employee", () => {
	it("begin the instance of employee", () => {
		const e = new Employee();
		expect(typeof(e)).toBe('object');
	});
	// test can set name via constructor args
	it("can set a name with the constructor arguments", () => {
		// arrange-set the with variables we need
		const name = "Bob";
		// act-actually call the code
		const e = new Employee(name);
		// assert-test the outcome
		expect(e.name).toBe(name);
	});
	// can set id via constructor args
	it("can set id with constructor arguments", () => {
		const id = 243 - 6584;
		const e = new Employee("jason", id);
		expect(e.id).toBe(id);
	});
	// can set email via constructor args
	it("can set email with constructor arguments", () => {
		const email = "john@zipmail.com";
		const e = new Employee("tim",243 - 6584, email);
		expect(e.email).toBe(email);
	});
	// can set name via constructor fuction
	it("it can return the name with the getname()", () => {
		const name = "dan";
		const e = new Employee(name);
		const employeename = e.getName();
		expect(employeename).toBe("dan");
	});
	// can set id via constructor function
	it("can set id with the getId()", () => {
		const Id = 2537488;
		const e = new Employee("steve", Id);
		const employeeId = e.getId();
		expect(employeeId).toBe(2537488);
	});
	// can get email via constructor function
	it("gets email with getemail()", () => {
		const email = "steve@zipmail.com";
		const e = new Employee("greg",2537488, email);
		const employeeEmail = e.getEmail();
		expect(e.email).toBe(email);
	});

	
});
