import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorSinglePageComponent } from './author-single-page/author-single-page.component';
import { AuthorsComponent } from './authors.component';


const routes: Routes = [
  {
    path: '',
    component: AuthorsComponent
  },
  { path: ':key', component: AuthorSinglePageComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  AuthorsRoutingModule { }