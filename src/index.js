document.addEventListener("DOMContentLoaded", () => {
	// your code here
	const form = document.getElementById("new-task-description");
	const tasks = document.getElementById("tasks");
	document.addEventListener("submit", (event) => {
		event.preventDefault();
		task = form.value;
		ele = document.createElement("li");
		ele.innerHTML = `
    <li>"${task}"</li>
    <button type="button">Delete</button>
    `;
		tasks.append(ele);
	});
	document.addEventListener("click", (event) => {
		// console.log(event.target.tagName);
		if (event.target.tagName === "BUTTON") {
			console.log(event.target.parentNode.parentNode.removeChild(ele));
		}
	});
});
