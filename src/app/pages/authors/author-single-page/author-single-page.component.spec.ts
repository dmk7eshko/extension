import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorSinglePageComponent } from './author-single-page.component';

describe('AuthorSinglePageComponent', () => {
  let component: AuthorSinglePageComponent;
  let fixture: ComponentFixture<AuthorSinglePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorSinglePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
