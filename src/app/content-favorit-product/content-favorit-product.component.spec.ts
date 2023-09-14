import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFavoritProductComponent } from './content-favorit-product.component';

describe('ContentFavoritProductComponent', () => {
  let component: ContentFavoritProductComponent;
  let fixture: ComponentFixture<ContentFavoritProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentFavoritProductComponent]
    });
    fixture = TestBed.createComponent(ContentFavoritProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
