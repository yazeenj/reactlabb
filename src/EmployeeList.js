import { useEffect, useState } from "react";
import AddEmployee from "./AddEmployee";
import Employee from "./Employee";

export default function EmployeeList() {
  let [showAddForm, setShowAddFrom] = useState(false);

  let [employess, setEmployees] = useState([
    {
      name: "Yazeen Jasim",
      email: "test@mail.com",
      phone: "070000000",
      skills: "React, Javascript, C++, Java, Python, GCP",
      avatar: "https://i.imgur.com/t9HFQvX.png",
    },
    {
      name: "Geralt Of Rivia",
      email: "test@mail.com",
      phone: "070000000",
      skills: "Angular, CSS, HTML, Javascript",
      avatar: "https://i.imgur.com/Q9qFt3m.png",
    },
    {
      name: "Yennefer Of Vengerberg",
      email: "test@mail.com",
      phone: "070000000",
      skills: "Go, python, Nodejs",
      avatar: "https://i.imgur.com/ebHfuth.png",
    },
  ]);

  useEffect(() => {
    let empData = JSON.parse(localStorage.getItem("employess"));
    if (empData) setEmployees(empData);
  }, []);

  useEffect(() => {
    localStorage.setItem("employess", JSON.stringify(employess));
  }, [employess]);

  function hireEmployeeFunc(employeeToHire) {
    let newState = [...employess];
    let index = newState.findIndex((el) => {
      if (employeeToHire.name === el.name) {
        return true;
      }
    });
    newState.splice(index, 1);
    setEmployees(newState);
  }

  function addNewEmployee(emp) {
    console.log("Called", emp);
    setEmployees((prevSate) => {
      return [...prevSate, emp];
    });
    setShowAddFrom(false);
  }

  function handleAddNewEmpClick() {
    setShowAddFrom(true);
  }

  function updateEmployeeFunc(employeeToUpdate) {
    let newState = [...employess];
    let index = newState.findIndex((el) => {
      if (employeeToUpdate.name === el.name) {
        return true;
      }
    });

    newState[index].name = employeeToUpdate.name;
    newState[index].email = employeeToUpdate.email;
    newState[index].phone = employeeToUpdate.phone;
    newState[index].skills = employeeToUpdate.skills;
    newState[index].avatar = employeeToUpdate.avatar;

    setEmployees(newState);
  }

  return (
    <div>
      <h3>Employee List</h3>

      {!showAddForm && (
        <button className="button" onClick={handleAddNewEmpClick}>
          Add Employee
        </button>
      )}
      {showAddForm && <AddEmployee addEmployee={addNewEmployee} />}
      {!showAddForm &&
        employess.map((employee) => (
          <Employee
            key={employee.avatar}
            EmployeesData={employee}
            hireEmployee={hireEmployeeFunc}
            updateEmployee={updateEmployeeFunc}
          />
        ))}
    </div>
  );
}
