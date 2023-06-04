export class Author {
    name: string = '';
    date_birth: Date = new Date('12/12/1990');
    date_death: Date = new Date('12/12/1990');
    biography: string = '';
    books: string[] = [];
  
    constructor(
      name: string,
      date_birth: Date,
      date_death: Date,
      bio: string,
      books: string[]
    ) {
      this.name = name;
      this.date_birth = date_birth;
      this.date_death = date_death;
      this.biography = bio;
      this.books = books;
    }
  }
