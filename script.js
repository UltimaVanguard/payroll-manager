// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employeeArray = [];
  let addEmployee = true
  //Loops until they cancel the adding another employee prompt
  while(addEmployee) {
    let employee = {
      firstName: '',
      lastName: '',
      salary: 0,
    }

    employee.firstName = prompt("Please enter employee first name", '');
    // loops until they enter a valid first name
    if (!employee.firstName) {
      while(!employee.firstName) {
        window.alert("Please enter a valid first name!");
        employee.firstName = prompt("Please enter employee first name", '');
      }
    }

    employee.lastName = prompt("Please enter employee last name", '');

    // loops until they enter a valid last name
    if (!employee.lastName) {
      while (!employee.lastName) {
        window.alert("Please enter a valid last name");
        employee.lastName = prompt("Please enter employee last name", '');
      } 
    }

    employee.salary = prompt("Please enter employee salary", '');

    // loops until they enter a valid salary
    if(isNaN(employee.salary)) {
        while(isNaN(employee.salary)) {
          window.alert("Please enter valid salary!");
          employee.salary = prompt("Please enter employee salary", '');
        }
      }

      employee.salary = Number(employee.salary);
      employeeArray.push(employee);
      addEmployee = confirm("Do you want to add another employee?")
  }

  return employeeArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalEmployees = 0;
  let totalSalary = 0;
  let averageSalary = 0;

  // loops through the array collecting all salaries and totals them together
  for (i = 0; i < employeesArray.length; i++) {
    totalEmployees++;
    totalSalary = totalSalary + employeesArray[i].salary;
  };

  averageSalary = totalSalary / totalEmployees;
  console.log(`The average salary for our ${totalEmployees} employees is $${averageSalary.toFixed(2)}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randNum = Math.floor(Math.random() * employeesArray.length);
  console.log(`Congratulations to ${employeesArray[randNum].firstName} ` +
  `${employeesArray[randNum].lastName} for being the employee of the day!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
