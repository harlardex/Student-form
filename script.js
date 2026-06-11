const studentForm = document.getElementById('studentForm');
const studentTableBody = document.querySelector('#studentTable tbody');

let students = [];

// Render Table
function renderTable(data) {
	studentTableBody.innerHTML = ''; // Clear table
	data.forEach((student) => {
		const row = `<tr>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.course}</td>
      <td></td>
    </tr>`;
		studentTableBody.innerHTML += row;
	});
}

// Handle Form Submission
studentForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = document.getElementById('name').value.trim();
	const age = parseInt(document.getElementById('age').value);
	const course = document.getElementById('course').value.trim();

	students.push({ name, age, course });

	renderTable(students);
	studentForm.reset();
});

// **Array Methods Examples**

// Map: Get all student names
function getStudentNames() {
	return students.map((student) => student.name);
}

// Filter: Get students older than 20
function studentsAbove20() {
	return students.filter((student) => student.age > 20);
}

// Sort: Sort students by age ascending
function sortByAge() {
	students.sort((a, b) => a.age - b.age);
	renderTable(students);
}

// Reverse: Reverse table order
function reverseTable() {
	students.reverse();
	renderTable(students);
}

// Example Usage
// console.log(getStudentNames());
// console.log(studentsAbove20());
// sortByAge();
// reverseTable();

// 4. Practical Assignments / Tasks for Students
// Task 1: Add a Delete button for each student row.
// Task 2: Add a Search input to filter students by name using .filter().
// Task 3: Sort the students by name alphabetically using .sort().
// Task 4: Display a list of all courses using .map() without duplicates.
// Task 5: Add form validation to ensure age is > 0 and name/course are not empty.
