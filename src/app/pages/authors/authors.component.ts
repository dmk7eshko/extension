import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';
import { Author } from '../../entities/author.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  authors: Author[] = [];
  authorsToShow: Author[] = [];
  constructor(private authorsService: AuthorsService) { }

  ngOnInit(){
    this.authorsService.getData().pipe(
      tap(x => console.log(x))
    ).subscribe((data) => 
      {
        this.authors=data;
        this.authorsToShow = this.authors;
      });
  }

}

