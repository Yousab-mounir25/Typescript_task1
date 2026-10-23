// question 1:
class User{
    private id: number
    private password: string
    private phone: string
    protected name : string
    public email:string
    public age :number

    //question 6
     protected notebooks: NoteBook[] = [];
    constructor(id:number , name:string , email:string , password:string , phone:string , age:number){
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.phone = phone
        this.age = age
    }
       public getId(): number {
        return this.id
    }
    public setId(value: number) {
        this.id = value
    }
     public getPassword(): string {
        return this.password
    }
    public setPassword(value: string) {
        this.password = value
    }
        public getPhone(): string {
        return this.phone
    }
    public setPhone(value: string) {
        this.phone = value
    }
    

     displayInfo(){
        console.log(
            `the username is ${this.name} and the id ${this.id} , email ${this.email}
            and his password ${this.password} , phone:${this.phone} and his age ${this.age}`
        );
        
    }
    addNotebook(notebook: NoteBook): void {
    this.notebooks.push(notebook);
  }
 
  getNotebooks(): NoteBook[] {
    return this.notebooks;
  }
    
}
//question 2 : admin extend from user
class Admin extends User {
    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
        super(id, name, email, password, phone, age); // Call the parent (User) constructor
    }
    // Method to manage notes
    public manageNotes(noteId: number, action: string): void {
        console.log(`Admin ${this.name} is performing action '${action}' on Note ID: ${noteId}`);
    }
}

//question 3
class Note {
    public noteId: number;
    public title: string;
    public content: string;
    public userId: User; // Association: Reference to the User object

    constructor(noteId: number, title: string, content: string, usernoteId: User) {
        this.noteId = noteId;
        this.title = title;
        this.content = content;
        this.userId = usernoteId;
        
    }
    public preview():string{
        return this.content
    }
}

//question 4

class NoteBook {
    public id: number;
    public title: string;
    private notes: Note[]=[]; // Composition: Notebook strictly owns its notes

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.notes = []; // Initialize empty collection
    }

   addNote(noteId: number, title: string, content: string, userId: User): Note {
    const note = new Note(noteId, title, content, userId); // NoteBook creates its own parts
    this.notes.push(note);
    return note;
  }

  removeNote(id: number): boolean {
    const before = this.notes.length;
    this.notes = this.notes.filter((n) => n.noteId !== id);
    return this.notes.length < before;
  }
}

//question 7
class Stroge <T>{
    items : T[] = []

    addItem(item:T){
        this.items.push(item)
    }
   removeItem(item: T): boolean {
    const index = this.items.indexOf(item);
    if (index === -1) return false;
    this.items.splice(index, 1);
    return true;
  }
 
  getAllItems(): T[] {
    return [...this.items];
  }
}
