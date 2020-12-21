import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWebinarComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateWebinarComponent;
  let fixture: ComponentFixture<CreateWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateWebinarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
