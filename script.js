const studentForm = document.getElementById('studentForm');
const studentTableBody = document.querySelector('#studentTable tbody');
const sortBtn = document.getElementById('sortBtn');

let students = JSON.parse(localStorage.getItem("students")) || [];
renderTable(students);

// Render Table
function renderTable(data) {
	studentTableBody.innerHTML = ''; // Clear table
	data.forEach((student) => {
		const row = `<tr>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.course}</td>
      <td><button onclick="deleteStudent(0)">Delete</button></td>
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
	saveStudent();
	renderTable(students);
	studentForm.reset();
});

function saveStudent(){
	localStorage.setItem("students",
	JSON.stringify(students));
}

// **Array Methods Examples**

//Delete a student
function deleteStudent(index) {
	students.splice(index, 1);
	saveStudent();
	renderTable(students);
}

// Filter: Arrange student by name
function filterStudent() {
	const search = document.getElementById('search').value.toLowerCase();
	let filtered = students.filter(student => student.name.toLowerCase().includes(search));
	renderTable(filtered);
}

// Sort: Sort students by alphabetically
let ascending = true;
function sortByName() {
	if(ascending) {
		students.sort((a, b) => a.name.localeCompare(b.name));
		renderTable(students);
		sortBtn.textContent = 'Sort A - Z';
	}
	else {
		students.reverse()
		renderTable(students)
		sortBtn.textContent = 'Sort Z - A';
	}
	ascending = !ascending;
}

//Sort: list of courses
function displayCourses() {
	return students.map((student) => student.course)
}
console.log(displayCourses());

//Sort: Unique list of courses
const uniqueCourses = [...new Set(students.map((student) => student.course))]
console.log(uniqueCourses);


// 4. Practical Assignments / Tasks for Students
// Task 1: Add a Delete button for each student row.
// Task 2: Add a Search input to filter students by name using .filter().
// Task 3: Sort the students by name alphabetically using .sort().
// Task 4: Display a list of all courses using .map() without duplicates.
// Task 5: Add form validation to ensure age is > 0 and name/course are not empty.