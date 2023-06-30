// Write your solution in this file!
const employee = { 
    name: "George",
    streetAddress: "Jungle Ave"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    console.log(employee, key, value)
    const newEmployee = {...employee}
    newEmployee[key] = value

    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress) {
    employee[streetAddress]= "12 Broadway"
    return employee
}

function deleteFromEmployeeByKey(newEmployee, name) {
    const newEmployee2 = {...employee}
    delete newEmployee2.name
    return newEmployee2
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name
    return employee
}