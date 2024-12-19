const chat = [
  {
    _id: "1",
    name: "Alice Johnson",
    age: 22,
    department: "Computer Science",
    courses: [
      {
        course_id: "CS101",
        course_name: "Introduction to Programming",
        grade: "A",
      },
      {
        course_id: "CS102",
        course_name: "Data Structures",
        grade: "B",
      },
    ],
    enrollment_year: 2021,
    email: "alice.johnson@example.com",
  },
  {
    _id: "2",
    name: "Bob Smith",
    age: 23,
    department: "Electrical Engineering",
    courses: [
      {
        course_id: "EE201",
        course_name: "Circuit Analysis",
        grade: "B+",
      },
      {
        course_id: "EE202",
        course_name: "Electronics",
        grade: "A",
      },
    ],
    enrollment_year: 2020,
    email: "bob.smith@example.com",
  },
  {
    _id: "3",
    name: "Charlie Brown",
    age: 21,
    department: "Mechanical Engineering",
    courses: [
      {
        course_id: "ME301",
        course_name: "Thermodynamics",
        grade: "B",
      },
      {
        course_id: "ME302",
        course_name: "Fluid Mechanics",
        grade: "A",
      },
    ],
    enrollment_year: 2022,
    email: "charlie.brown@example.com",
  },
];

module.exports = chat;
