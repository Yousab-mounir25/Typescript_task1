# Part B - UML Class Diagram: Simple Notes Management System

## 1. Class Diagram

```mermaid
classDiagram
direction TB

class User {
  #id : number
  #name : string
  #email : string
  -password : string
  #phone : string
  #age : number
  #notebooks : NoteBook[]
  +constructor(id, name, email, password, phone, age)
  +getId() number
  +getName() string
  +checkPassword(input) boolean
  +displayInfo() void
  +addNotebook(notebook) void
  +getNotebooks() NoteBook[]
}

class Admin {
  +manageNotes(notebook, action, noteId?) void
}

class Note {
  +id : number
  +title : string
  +content : string
  +author : User
  +userId : number
  +preview(length) string
}

class NoteBook {
  +id : number
  +title : string
  -notes : Note[]
  +addNote(id, title, content, author) Note
  +removeNote(id) boolean
  +getNotes() Note[]
}

class Storage~T~ {
  -items : T[]
  +addItem(item T) void
  +removeItem(item T) boolean
  +getAllItems() T[]
}

User <|-- Admin : Inheritance
NoteBook "1" *-- "0..*" Note : Composition
User "1" o-- "0..*" NoteBook : Aggregation
Note "0..*" --> "1" User : Association (author)
```

Legend: `+` public, `#` protected, `-` private.

## 2. Relationships

| Relationship | Between | UML symbol | Why |
|---|---|---|---|
| Inheritance | Admin → User | Hollow triangle | Admin extends User and inherits its properties and methods |
| Composition | NoteBook ◆— Note | Filled diamond | NoteBook creates and owns its notes; they do not exist without it |
| Aggregation | User ◇— NoteBook | Hollow diamond | A user owns many notebooks, but a notebook is created independently and survives without the user |
| Association | Note → User | Open arrow | Each note refers to the user who authored it |