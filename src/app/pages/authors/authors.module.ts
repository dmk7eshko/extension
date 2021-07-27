import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from './authors.component';
import { AuthorSinglePageComponent } from './author-single-page/author-single-page.component';

@NgModule({
  imports: [
    CommonModule,
    AuthorsRoutingModule
  ],
  declarations: [AuthorsComponent, AuthorSinglePageComponent]
})
export class AuthorsModule { }
