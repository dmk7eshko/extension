import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PersonalService } from './personal.service';
import { AuthorsService } from '../authors.service';
import { Author } from 'src/app/entities/author.model';
import { Persona } from 'src/app/entities/personal.model';
import { AuthorDocs } from 'src/app/entities/authorDocs.model';

@Component({
  selector: 'app-author-single-page',
  templateUrl: './author-single-page.component.html',
  styleUrls: ['./author-single-page.component.scss']
})

export class AuthorSinglePageComponent implements OnInit {
  person: Persona[] = [];
  curentAuthor: Persona|null = null;

  constructor(private route: ActivatedRoute, private personalService: PersonalService, private authorsService: AuthorsService) { }
  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      var authorKey = params.get('key');
      this.personalService.getData(authorKey).subscribe((data) => 
        {
          this.curentAuthor = data;
        });
    });
}
}
