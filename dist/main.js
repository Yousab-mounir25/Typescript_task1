// question 1:
class User {
    id;
    password;
    phone;
    name;
    email;
    age;
    //question 6
    notebooks = [];
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }
    getId() {
        return this.id;
    }
    setId(value) {
        this.id = value;
    }
    getPassword() {
        return this.password;
    }
    setPassword(value) {
        this.password = value;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(value) {
        this.phone = value;
    }
    displayInfo() {
        console.log(`the username is ${this.name} and the id ${this.id} , email ${this.email}
            and his password ${this.password} , phone:${this.phone} and his age ${this.age}`);
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
    getNotebooks() {
        return this.notebooks;
    }
}
//question 2 : admin extend from user
class Admin extends User {
    constructor(id, name, email, password, phone, age) {
        super(id, name, email, password, phone, age); // Call the parent (User) constructor
    }
    // Method to manage notes
    manageNotes(noteId, action) {
        console.log(`Admin ${this.name} is performing action '${action}' on Note ID: ${noteId}`);
    }
}
//question 3
class Note {
    noteId;
    title;
    content;
    userId; // Association: Reference to the User object
    constructor(noteId, title, content, usernoteId) {
        this.noteId = noteId;
        this.title = title;
        this.content = content;
        this.userId = usernoteId;
    }
    preview() {
        return this.content;
    }
}
//question 4
class NoteBook {
    id;
    title;
    notes = []; // Composition: Notebook strictly owns its notes
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.notes = []; // Initialize empty collection
    }
    addNote(noteId, title, content, userId) {
        const note = new Note(noteId, title, content, userId); // NoteBook creates its own parts
        this.notes.push(note);
        return note;
    }
    removeNote(id) {
        const before = this.notes.length;
        this.notes = this.notes.filter((n) => n.noteId !== id);
        return this.notes.length < before;
    }
}
//question 7
class Stroge {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index === -1)
            return false;
        this.items.splice(index, 1);
        return true;
    }
    getAllItems() {
        return [...this.items];
    }
}
export {};
//# sourceMappingURL=main.js.map