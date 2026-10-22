// шаг 1
let task = '';
let completedTaskCount = 0;

// шаг 2. функция для отображения задачи
const showTask = () => {
    if (task.trim()) { //если '' будет false -> else
        return console.log(task)
    } else {
        return console.log("Задача отсутствует")
    }
};

//шаг 3. функция для добавления задачи
const setTask = (taskDescription) => {
    return task.trim()
        ? console.log("Не могу добавить задачу, завершите или удалите предыдущую")
        : task = taskDescription
}

// шаг 4. функция для завершения задачи
const completeTask = () => {
    if (!task.trim()) {
        console.log("Задача отсутствует")
        return
    }

    task = "";
    completedTaskCount++;
};

// шаг 5. функция удаления задачи
const deleteTask = () => {
    if (!task.trim()) {
        console.log("Задача отсутствует")
        return;
    }

    task = ""
}