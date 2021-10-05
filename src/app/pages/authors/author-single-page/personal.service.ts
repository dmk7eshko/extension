import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Persona } from 'src/app/entities/personal.model';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  post(person: Persona | undefined) {

  }
  
 
  constructor(private http: HttpClient) { }

  getData(key: string): Observable<Persona> {
    const serviceURL: string = `https://openlibrary.org/authors/${key}.json`;
    return this.http.get<Persona>(serviceURL);
  }
  getAuthor(){
    //запросить данные, готовые
  }
}
