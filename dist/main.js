// question 1:
class User {
    _id;
    _password;
    _phone;
    name;
    email;
    age;
    constructor(id, name, email, password, phone, age) {
        this._id = id;
        this.name = name;
        this.email = email;
        this._password = password;
        this._phone = phone;
        this.age = age;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
    displayInfo() {
        console.log(`the username is ${this.name} and the id ${this.id} , email ${this.email}
            and his password ${this.password} , phone:${this.phone} and his age ${this.age}`);
    }
}
const user = new User(123, "yousab", "yousab.mounir@gmail.com", "122", 1222, 12);
user.displayInfo();
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
    id;
    title;
    content;
    userId; // Association: Reference to the User object
    constructor(id, title, content, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        return this.content;
    }
}
//question 
class NoteBook {
    id;
    title;
    _notes; // Composition: Notebook strictly owns its _notes
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this._notes = []; // Initialize empty collection
    }
    addNote(note) {
        this._notes.push(note);
        console.log(`Note "${note.title}" added to Notebook "${this.title}".`);
    }
    removeNote(noteId) {
        const initialLength = this._notes.length;
        // Filter out the note with the matching ID
        this._notes = this._notes.filter(note => note.id !== noteId);
        if (this._notes.length < initialLength) {
            console.log(`Note ID ${noteId} removed from Notebook "${this.title}".`);
        }
        else {
            console.log(`Note ID ${noteId} not found in Notebook.`);
        }
    }
}
export {};
//# sourceMappingURL=main.js.map