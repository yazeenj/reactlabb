import { useEffect, useState } from "react";
import AddEmployee from "./AddEmployee";
import Employee from "./Employee";

export default function EmployeeList() {
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

  function handleAddNewEmpClick() {
    setEmployees((prev) => {
      return [
        ...prev,
        {
          name: "Test Test",
          email: "test@test.com",
          phone: "070000000",
          skills: "none",
          avatar: "https://i.imgur.com/TUhCrsY.png",
        },
      ];
    });
  }
  return (
    <div>
      <h3>Employee List</h3>

      <button className="button" onClick={handleAddNewEmpClick}>
        Add Employee
      </button>
      {employess.map((employee) => (
        <Employee key={employee.avatar} EmployeesData={employee} />
      ))}
    </div>
  );
}
