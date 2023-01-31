import { useState } from "react";
let x = 0;

const Employees = () => {
  const [employees, SetEmployees] = useState([
    {
      id: 1,
      FirstName: "Bobby",
      LastName: "Brando",
      occupancy: "Head of Strategy",
      gender: "Male",
      Team: 1,
    },
    {
      id: 2,
      FirstName: "Sojourner",
      LastName: "Truth",
      occupancy: "Marketing Manager",
      gender: "Female",
      Team: 3,
    },

    {
      id: 3,
      FirstName: "Adesanya",
      LastName: "Olawoseun",
      occupancy: "Developer",
      gender: "Male",
      Team: 2,
    },

    {
      id: 4,
      FirstName: "Priya",
      LastName: "Vashnu",
      occupancy: "Head of Legal",
      gender: " Female",
      Team: 3,
    },

    {
      id: 5,
      FirstName: "Joshua",
      LastName: "Luyeye",
      occupancy: "CEO",
      gender: "Male",
      TeamName: 1,
    },
  ]);

  return <main> {employees[0].FirstName}</main>;
};

export default Employees;
