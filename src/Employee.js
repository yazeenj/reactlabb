import React, { useState } from "react";
import AddEmployee from "./AddEmployee";

export default function Employee({
  EmployeesData,
  hireEmployee,
  updateEmployee,
}) {
  let [showUpdateForm, setpUpdateForm] = useState(false);
  function handleHireClick() {
    hireEmployee(EmployeesData);
  }
  function handleUpdateClick() {
    setpUpdateForm(true);
  }
  function updateEmployeeData(emp) {
    updateEmployee(emp);
  }
  return (
    <>
      <div className="EmployeeDiv">
        <img className="avatar" src={EmployeesData.avatar} />
        <div>
          <h2>{EmployeesData.name}</h2>
          <p>
            <strong>Email:</strong>
            {EmployeesData.email}
          </p>
          <p>
            <strong>Phone:</strong>
            {EmployeesData.phone}
          </p>
          <p>
            <strong>Skills:</strong>
            {EmployeesData.skills}
          </p>
          <button className="button1" onClick={handleHireClick}>
            Remove
          </button>
          <button className="button1" onClick={handleUpdateClick}>
            Update
          </button>
        </div>
      </div>
      {showUpdateForm && (
        <AddEmployee
          employeeData={EmployeesData}
          updateEmployee={updateEmployeeData}
        />
      )}
    </>
  );
}
