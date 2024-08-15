document.addEventListener('DOMContentLoaded', () => {
    let inp = document.querySelector('#newtodo');
    let btn = document.querySelector('#addbtn');
    let ul = document.querySelector('#todolist');

    let tasks = [];

    function show() {
        ul.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${task}
                <button class="edit" data-index="${index}">Edit</button>
                <button class="delete" data-index="${index}">Delete</button>
            `;
            ul.appendChild(li);
        });

        // Add event listeners for edit buttons
        document.querySelectorAll('.edit').forEach(button => {
            button.addEventListener('click', () => {
                const index = button.getAttribute('data-index');
                const newTask = prompt('Edit your task', tasks[index]);
                if (newTask !== null) {
                    tasks[index] = newTask.trim();
                    show();
                }
            });
        });

        // Add event listeners for delete buttons
        document.querySelectorAll('.delete').forEach(button => {
            button.addEventListener('click', () => {
                const index = button.getAttribute('data-index');
                tasks.splice(index, 1);
                show();
            });
        });
    }

    btn.addEventListener('click', () => {
        const task = inp.value.trim();
        if (task !== '') {
            tasks.push(task);
            inp.value = '';
            show();
        }
    });
});
