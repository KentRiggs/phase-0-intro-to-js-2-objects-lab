// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
  };
  //update employee 
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the employee object directly
    employee[key] = value;
  
    // Return the entire updated employee
    return employee;
  }
  // Function to delete key from a clone of employee and return the new employee
function deleteFromEmployeeByKey(employee, key) {
    // clone of the employee object
    const employeeClone = { ...employee };
  
    // Delete the specified key
    delete employeeClone[key];
  
    // Return the new employee
    return employeeClone;
  }
  // delete key from employee and return the updated employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key from the employee object
    delete employee[key];
  
    // Return the updated employee (destructive)
    return employee;
  }