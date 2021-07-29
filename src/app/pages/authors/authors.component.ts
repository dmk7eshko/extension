import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef  } from '@angular/core';
import { AuthorsService } from './authors.service';
import { Author } from '../../entities/author.model';
import { AuthorDocs } from '../../entities/authorDocs.model';
import { fromEvent, range, zip } from 'rxjs'; 
import { map, bufferCount, startWith, scan } from 'rxjs/operators';
// import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  
  authors: Author[] = [];
  AuthorDocs  = [];
  x = 3;

  
  constructor(private authorsService: AuthorsService) { }

  ngOnInit(){
    this.authorsService.getData().pipe(
      // tap(x => console.log(x))
      
    ).subscribe((data) => 
      {
        this.authors = data;
        // let x = 3;
        this.AuthorDocs = this.authors
          .map(item => item.docs.slice(0, this.x),
            // .map(item =>  item.name )  
        )
        // this.AuthorDocs.sort();
      });
      // console.log('x on init', this.x);
  }
  // ngDoCheck(){
  //   console.log('ngDoCheck', this.AuthorDocs[0].length);
  // }
  LoadMore(){
    console.log('load more');
    
    let z = this.AuthorDocs[0].length;
    this.AuthorDocs = this.authors
      .map(item => item.docs.slice(0, z+this.x)
    )
  console.log(z)

    const SLICE_SIZE = 50;
    const loadMore$ = fromEvent(document.getElementsByTagName('button')[0], 'click');
    const data$ = range(100);
       zip(
         data$.pipe(bufferCount(SLICE_SIZE)),
         loadMore$.pipe(startWith(0)),
       ).pipe(
         map(results => results[0]),
         scan((acc, chunk) => [...acc, ...chunk], []),
       ).subscribe({
         next: v => console.log('v', v),
         complete: () => console.log('complete'),
       });
  
}
}
