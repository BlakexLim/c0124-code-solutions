/* exported getStudentNames */
interface Object {
  name: string;
}

function getStudentNames(students: string[]): string[] {
  const studentNames = [];
  for (let i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);
  }
  return studentNames;
}
