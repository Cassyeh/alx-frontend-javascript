export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const students = listStudents.filter((student) => student.location === city);
  for (const student of students) {
    student.grade = 'N/A';
  }
  const newStudents = students.map((student) => {
    const sole = student;
    for (const grade of newGrades) {
      if (sole.id === grade.studentId) {
        sole.grade = grade.grade;
      }
    }
    return sole;
  });
  return newStudents;
}
