import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentUsuallyBuyComponent } from './content-usually-buy.component';

describe('ContentUsuallyBuyComponent', () => {
  let component: ContentUsuallyBuyComponent;
  let fixture: ComponentFixture<ContentUsuallyBuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentUsuallyBuyComponent]
    });
    fixture = TestBed.createComponent(ContentUsuallyBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
