import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Author } from '../../entities/author.model';
import {tap, map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
    post(author: Author | undefined) {
    
  }
  serviceURL: string = 'https://openlibrary.org/search/authors.json?q=j%20k%20';
  constructor(private http: HttpClient){ }
      
   getData() : Observable<Author[]>{
        return this.http.get<Author>(this.serviceURL).pipe(
          map(item => {
            return [item];
          })
);
}
}