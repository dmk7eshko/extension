import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../authors.service';
import { Author } from '../../../entities/author.model';

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
    this.route.paramMap.subscribe(params => {
      this.AuthorsService.getData().subscribe((data) => 
        {
          this.authors=data;
          this.authorsToShow = this.authors.map(item =>{
            return item.docs;
        });
          this.authorsToShow.forEach((p) => {
            var d:string = p.key.toString();
            if (d == params.get('key')) {
              this.curentAuthors = p;
            }
          });
        });
    });
  }
}
