import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { AuthorsService } from './authors.service';
import { Author } from '../../entities/author.model';
import { AuthorDocs } from '../../entities/authorDocs.model';
// import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  
  authors: Author[] = [];
  AuthorDocs  = [];

  constructor(private authorsService: AuthorsService) { }

  ngOnInit(){
    this.authorsService.getData().pipe(
      // tap(x => console.log(x))
    ).subscribe((data) => 
      {
        this.authors = data;
        this.AuthorDocs = this.authors
          .map(item => item.docs
            // .map(item =>  item.name )  
        )
        // this.AuthorDocs.sort();
      })  
  }
}

