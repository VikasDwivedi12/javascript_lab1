const employees = [
    {id: 1, name: "John Doe", age: 30, department: 'IT', salary: 50000},
    {id: 2, name: "Alice Smith", age: 28, department: 'HR', salary: 45000},
    {id: 1, name: "Bob Johnson", age: 35, department: 'Finance', salary: 60000}
]

//function to display all employees
function displayEmployees(){
    const totalEmployees = employees.map(function(employee, index){
        return `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`;
    }).join('');
    document.getElementById('employeeDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} = ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeeDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId){
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if(foundEmployee){
        document.getElementById('employeeDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.salary}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}