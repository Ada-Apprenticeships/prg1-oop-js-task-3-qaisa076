
const PRIORITY = { "LOW": 1, "MEDIUM": 3, "HIGH": 5, "URGENT": 7 };

function validInteger(value) {
    const strValue = String(value);
    const isPositiveInteger = /^\d+$/.test(strValue);
    return isPositiveInteger;
}

function validatePriority(priority) {
    const value = Number(priority);
    return Object.values(PRIORITY).includes(value) ? value : PRIORITY.LOW;
}

function todaysDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}


class Task {
    constructor(title, priority) {
        this._title = title; 
        this._priority = validatePriority(priority); 
        this._added = todaysDate(); 
    }
    get title() {
        return this._title;
    }
 
 
    get priority() {
        return this._priority;
    }
 
 
    set priority(value) {
        this._priority = validatePriority(value); 
    }
 
 
    get added() {
        return this._added;
    }
}

// ToDo Class
class ToDo {
    constructor() {
        this.tasks = []; 
    }
 
   
}





// Leave this code here for the automated tests
module.exports = {
  PRIORITY, validInteger, validatePriority, todaysDate, ToDo, Task,
}