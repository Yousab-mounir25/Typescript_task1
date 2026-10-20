// question 1:
class User {
    id;
    name;
    email;
    password;
    phone;
    age;
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
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
export {};
//# sourceMappingURL=main.js.map