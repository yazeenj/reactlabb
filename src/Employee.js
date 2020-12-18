import React, { useState } from "react";
import AddEmployee from "./AddEmployee";

export default function Employee({ EmployeesData }) {
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
        </div>
      </div>
    </>
  );
}
