import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AuthorsService } from '../authors.service';
import { Author } from '../../../entities/author.model';
import { AuthorDocs } from 'src/app/entities/authorDocs.model';

@Component({
  selector: 'app-author-single-page',
  templateUrl: './author-single-page.component.html',
  styleUrls: ['./author-single-page.component.scss']
})
export class AuthorSinglePageComponent implements OnInit {
  authors: Author[] = [];
  authorsToShow = [];
  curentAuthors: Author|null = null;
 

  constructor(private route: ActivatedRoute, private AuthorsService: AuthorsService) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.AuthorsService.getData().subscribe((data) => 
    //     {
    //       this.authors=data;
    //       this.authorsToShow = this.authors
    //       .map(item =>{
    //         return item.docs;
    //     });

    //       this.authorsToShow.forEach((p) => {
    //         var d:string = p.key.toString();
    //         if (d == params.get('key')) {
    //           this.curentAuthors = p;
    //         }
    //       });
    //     });
    // });

    // this.route.paramMap.subscribe(params => {
    //   this.carService.getData().subscribe((data) => 
    //     {
    //       this.cars=data;
    //       this.cars.forEach((p: Car) => {
    //         var d:string = p.id.toString();
    //         if (d == params.get('id')) {
    //           this.curentCar = p;
    //         }
    //       });
    //     });
    // });
  }
}
