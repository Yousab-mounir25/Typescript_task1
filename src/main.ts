// question 1:
class User{
    private _id: number
    private _password: string
    private _phone: number
    protected name : string
    public email:string
    public age :number
    constructor(id:number , name:string , email:string , password:string , phone:number , age:number){
        this._id = id
        this.name = name
        this.email = email
        this._password = password
        this._phone = phone
        this.age = age
    }
       public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }
     public get password(): string {
        return this._password
    }
    public set password(value: string) {
        this._password = value
    }
        public get phone(): number {
        return this._phone
    }
    public set phone(value: number) {
        this._phone = value
    }

     displayInfo(){
        console.log(
            `the username is ${this.name} and the id ${this.id} , email ${this.email}
            and his password ${this.password} , phone:${this.phone} and his age ${this.age}`
        );
        
    }
}
const user = new User(123 , "yousab" , "yousab.mounir@gmail.com" , "122" , 1222 , 12)
user.displayInfo()
//question 2 : admin extend from user
class Admin extends User {
    constructor(id: number, name: string, email: string, password: string, phone: number, age: number) {
        super(id, name, email, password, phone, age); // Call the parent (User) constructor
    }
    // Method to manage notes
    public manageNotes(noteId: number, action: string): void {
        console.log(`Admin ${this.name} is performing action '${action}' on Note ID: ${noteId}`);
    }
}

//question 3
class Note {
    public id: number;
    public title: string;
    public content: string;
    public userId: User; // Association: Reference to the User object

    constructor(id: number, title: string, content: string, userId: User) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    public preview():string{
        return this.content
    }
}

//question 

class NoteBook {
    public id: number;
    public title: string;
    private _notes: Note[]; // Composition: Notebook strictly owns its _notes

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this._notes = []; // Initialize empty collection
    }

    public addNote(note: Note): void {
        this._notes.push(note);
        console.log(`Note "${note.title}" added to Notebook "${this.title}".`);
    }

    public removeNote(noteId: number): void {
        const initialLength = this._notes.length;
        // Filter out the note with the matching ID
        this._notes = this._notes.filter(note => note.id !== noteId);
        
        if (this._notes.length < initialLength) {
            console.log(`Note ID ${noteId} removed from Notebook "${this.title}".`);
        } else {
            console.log(`Note ID ${noteId} not found in Notebook.`);
        }
    }
}
