import React, { useEffect, useState } from "react";

export default function AddEmployee({
  addEmployee,
  employeeData,
  updateEmployee,
}) {
  let [newEmployee, setNewEmployee] = useState({
    name: "",
    phone: "",
    email: "",
    skills: "",
    avatar: "",
  });

  useEffect(() => {
    if (employeeData) setNewEmployee(employeeData);
  }, []);

  function handleOnChange(name, value) {
    setNewEmployee((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  useEffect(() => {
    console.log(newEmployee);
  }, [newEmployee]);

  function handleAddEmployeeClick(e) {
    e.preventDefault();
    if (employeeData) {
      updateEmployee(newEmployee);
    } else {
      if (newEmployee.name !== "" && newEmployee.avatar !== "") {
        addEmployee(newEmployee);
      }
    }
  }

  return (
    <div>
      <form className="fromDiv">
        <label>Name</label>
        <input
          type="text"
          required
          value={newEmployee.name}
          onChange={(e) => handleOnChange("name", e.target.value)}
        />

        <label>email</label>
        <input
          type="email"
          required
          value={newEmployee.email}
          onChange={(e) => handleOnChange("email", e.target.value)}
        />

        <label>phone</label>
        <input
          type="phone"
          required
          value={newEmployee.phone}
          onChange={(e) => handleOnChange("phone", e.target.value)}
        />
        <label>skills</label>
        <input
          type="text"
          required
          value={newEmployee.skills}
          onChange={(e) => handleOnChange("skills", e.target.value)}
        />
        <label>avatar</label>
        <input
          type="text"
          required
          value={newEmployee.avatar}
          onChange={(e) => handleOnChange("avatar", e.target.value)}
        />
        <button onClick={handleAddEmployeeClick} className="button">
          {employeeData ? "Update Employee" : "Add Employee"}
        </button>
      </form>
    </div>
  );
}
