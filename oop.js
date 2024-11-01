// Priority levels with values.
const PRIORITY = { "LOW": 1, "MEDIUM": 3, "HIGH": 5, "URGENT": 7 };

// Checks if the value is a positive integer.
function validInteger(value) {
    return /^\d+$/.test(String(value)); 
}

// Validates priority, defaults to LOW if invalid.
function validatePriority(priority) {
    const value = Number(priority);
    return Object.values(PRIORITY).includes(value) ? value : PRIORITY.LOW;
}

// Returns the current date and time formatted as a string.
function todaysDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

class Task {
    #title; 
    #priority; 
    #added; 

    constructor(title, priority) {
        this.#title = title; 
        this.#priority = validatePriority(priority); 
        this.#added = todaysDate(); 
    }

    get title() {
        return this.#title; 
    }
    
    get priority() {
        return this.#priority; 
    }

    set priority(value) {
        this.#priority = validatePriority(value); 
    }

    get added() {
        return this.addedadded; 
    }
}

// Manages a collection of tasks
class ToDo {
    constructor() {
        this.tasks = []; 
    }

    // Adds a Task instance
    add(task) {
        if (task instanceof Task) {
            this.tasks.push(task);
            return this.tasks.length; 
        }
        throw new Error("Only instances of Task can be added.");
    }
 
    // Removes a task by title
    remove(title) {
        const index = this.tasks.findIndex(task => task.title === title);
        if (index !== -1) {
            this.tasks.splice(index, 1); 
            return true; 
        }
        return false; 
    }

    // Lists tasks, filtered by priority if provided
    list(priority = 0) {
        if (priority === 0) {
            return this.tasks.map(task => [task.added, task.title, task.priority]); 
        }
        return this.tasks
            .filter(task => task.priority === priority) 
            .map(task => [task.added, task.title, task.priority]);
    }

    // Retrieves a task by title
    task(title) {
        const task = this.tasks.find(task => task.title === title);
        if (task) {
            return task;
        }
        throw new Error(`Task '${title}' Not Found`); 
    }
}

// Create an instance of ToDo
const taskList = new ToDo();

// Example usage with error handling
try {
    console.log(taskList.task('WrongTitle')); 
} catch (error) {
    console.error(error.message); 
}


// Leave this code here for the automated tests
module.exports = {
  PRIORITY, validInteger, validatePriority, todaysDate, ToDo, Task,
}