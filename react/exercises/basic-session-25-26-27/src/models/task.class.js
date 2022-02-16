export class Task {
    id = 0
    description = '';
    completed = false;

    constructor(id, description, completed = false) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }
}