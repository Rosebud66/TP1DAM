import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFhLayoutComponent } from './no-fh-layout.component';

describe('NoFhLayoutComponent', () => {
  let component: NoFhLayoutComponent;
  let fixture: ComponentFixture<NoFhLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoFhLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFhLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
