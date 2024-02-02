/* exported getStudentNames */
function getStudentNames(students: string): string[] {
  const studentNames: string[] = [];
  for (let i = 0; i < students.length; i++) {
    studentNames.push(students[i]);
  }
  return studentNames;
}
