// question 1:
class User{
    private id :number
    public name : string
    public email:string
    private password:string
    private phone:number
    public age :number

    constructor(id:number , name:string , email:string , password:string , phone:number , age:number){
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.phone = phone
        this.age = age
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