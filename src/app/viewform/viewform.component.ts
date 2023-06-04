import { Component, OnInit } from '@angular/core';
import { Author } from '../myform/Class/author';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent implements OnInit {
  showUpdate = false;
  authors: Author[] = [];

  constructor() {}

  addAuthor(event: any) {
    console.log(event);
    if (event as Author) {
      let author: Author = event;
      this.authors.push(author);
      console.log(this.authors);
    } else {
      throw new Error('Error of type');
    }
  }

  ngOnInit() {}
}
